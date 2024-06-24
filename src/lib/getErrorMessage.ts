import axios from 'axios';

export default function getErrorMessage(error: unknown) {
  if (axios.isAxiosError(error)) {
    if (
      error.response?.data?.data &&
      Object.keys(error.response?.data?.data).length > 0
    ) {
      const err = error.response.data.data;
      const keys = Object.keys(err);
      const firstKey = keys[0];
      const firstError = err[firstKey];
      return firstError[0];
    }
    if (error.response?.data?.message) {
      return error.response?.data.message;
    } else return error.message;
  } else if (error instanceof Error) return error.message;
  else return 'Unexpected error. Try again later';
}
