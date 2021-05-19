import request from '../../../shared/utils/request';
import { AuthParams } from './adapter';

export const auth = async (data: AuthParams) => request.post('/auth/login', data);

export const requestResetPassword = async () => {};
