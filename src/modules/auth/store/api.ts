import request from '../../../shared/utils/request';

export type AuthParams = {
  username: string;
  password: string;
};

export const auth = async (data: AuthParams) => request.post('/auth/login', data);

export const requestResetPassword = async () => {};
