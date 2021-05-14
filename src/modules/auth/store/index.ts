import { AuthParams } from './api';

export interface AuthStore {
  isLoggedIn: boolean;
  login: (data: AuthParams) => any;
  logout: (data: AuthParams) => any;
  signup: Function;
}
