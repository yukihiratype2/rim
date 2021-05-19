export default interface AuthAdapter {
  login(data: AuthParams): Promise<void>;
  logout(): boolean | Promise<void>;
  signup(data: AuthParams): Promise<void>;
  // getAuth(): Promise<boolean>
}

export type AuthParams = {
  username: string;
  password: string;
};
