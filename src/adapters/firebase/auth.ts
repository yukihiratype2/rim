import { FirebaseApp } from 'firebase/app';
import {
  getAuth, Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
} from 'firebase/auth';
import AuthAdapter, { AuthParams } from '../../modules/auth/store/adapter';

export default class FirebaseAuthStore implements AuthAdapter {
  firebase: FirebaseApp;

  auth: Auth;

  constructor(firebase: FirebaseApp) {
    this.firebase = firebase;
    this.auth = getAuth();
  }

  async login(data: AuthParams) {
    try {
      await signInWithEmailAndPassword(this.auth, data.username, data.password);
      return;
    } catch (error) {
      console.log(error);
      throw Error('som problem');
    }
  }

  async signup(data: AuthParams) {
    console.log(this);
    try {
      await createUserWithEmailAndPassword(this.auth, data.username, data.password);
      return;
    } catch (error) {
      console.log(error);
      throw Error('some problem');
    }
  }

  logout() {
    return true;
  }
}
