export type ApiResponse<T> = {
  error: boolean;
  message: string;
  data: null | T;
};
