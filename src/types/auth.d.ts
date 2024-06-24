export type loginUserType = {
  name?: string;
  email?: string;
  request_id?: string;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  status: string;
  token: string;
};
