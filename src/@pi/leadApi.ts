import { apiConfig } from './apiConfig';

type leadParams = {
  industry_id: string;
  country_id: string;
};

export const getLeads = async (token: string, params: leadParams) => {
  const res = await apiConfig.get(`/leads`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const getIndustries = async (token: string) => {
  const res = await apiConfig.get('/industries', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const getCountries = async (token: string) => {
  const res = await apiConfig.get('/countries', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
