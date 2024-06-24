import { loginUserType, UserType } from '@/src/types/auth';
import { apiConfig } from './apiConfig';

export const logInUser = async (
  payload?: Record<'name' | 'email' | 'request_id', string>
) => {
  try {
    const res = await apiConfig.post('/mobile/v1/login', payload);
    if (res.status === 200) {
      const data = res.data.data;
      const user: UserType = {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        status: data.user.status,
        token: data.token,
      };
      return user;
    } else {
      throw new Error(res.data.message);
    }
  } catch (err) {
    throw new Error('');
  }
};

export const signInUser = async (payload: loginUserType) => {
  try {
    const res = await apiConfig.post('/mobile/v1/login-g', {
      email: payload?.email,
      name: payload?.name,
    });
    return res.data.data;
  } catch (error) {
    console.error(error);
    return '/auth/login?errorMsg=hi';
  }
};
