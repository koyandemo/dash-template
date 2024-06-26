import { apiConfig } from './apiConfig';

export const getCards = async (token: string) => {
  const res = await apiConfig.get('/cards', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
