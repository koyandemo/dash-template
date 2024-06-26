import { getServerSession } from 'next-auth';
import { authOptions } from '../../next-auth.config';

export const sessionForServer = () => {
  return getServerSession(authOptions);
};
