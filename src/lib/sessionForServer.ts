import { authOptions } from '@/next-auth.config';
import { getServerSession } from 'next-auth';

export const sessionForServer = () => {
  return getServerSession(authOptions);
};
