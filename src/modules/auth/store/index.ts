import { makeObservable, observable, runInAction } from 'mobx';
// eslint-disable-next-line import/no-cycle
import { firebaseAuthStore } from '../../../adapters/firebase/firebase';
import AuthAdapter, { AuthParams } from './adapter';

// export declare interface AuthStore {
//   login: (data: AuthParams) => Promise<boolean>;
//   signup: (data: AuthParams) => Promise<boolean>;
//   logout: () => Promise<boolean>;
//   isLoggedIn: boolean
// }

export class AuthStore {
  adapter: AuthAdapter;

  isLoggedIn: boolean = false;

  constructor(adapter: AuthAdapter) {
    this.adapter = adapter;
    makeObservable(this, {
      isLoggedIn: observable,
    });
  }

  login = async (data: AuthParams) => {
    this.adapter.login(data);
    runInAction(() => { this.isLoggedIn = true; });
  };

  signup = async (data: AuthParams) => {
    this.adapter.signup(data);
    runInAction(() => { this.isLoggedIn = true; });
  };
}

export const authStore = new AuthStore(firebaseAuthStore);
