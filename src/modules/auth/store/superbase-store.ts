import { SupabaseClient } from '@supabase/supabase-js';
import {
  action, makeObservable, observable, runInAction,
} from 'mobx';
import { AuthStore } from '.';
import { AuthParams } from './api';

export default class SupaBaseAuthStore implements AuthStore {
  supabase: SupabaseClient;

  isLoggedIn = false;

  login = async (data: AuthParams) => {
    const result = await this.supabase.auth.signIn({
      email: data.username,
      password: data.password,
    });
    runInAction(() => {
      this.isLoggedIn = !!result.session;
    });
    return result;
  };

  async logout() {
    runInAction(() => {
      this.isLoggedIn = false;
    });
    return this.supabase.auth.signOut();
  }

  async signup(data: AuthParams) {
    const result = await this.supabase.auth.signUp({
      email: data.username,
      password: data.password,
    });
    runInAction(() => {
      this.isLoggedIn = !!result.session;
    });
    return result;
  }

  constructor(supabase:SupabaseClient) {
    makeObservable(this, {
      isLoggedIn: observable,
      login: action,
    });
    this.supabase = supabase;
  }
}
