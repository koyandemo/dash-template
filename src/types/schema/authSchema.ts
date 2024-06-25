import { z } from 'zod';

export const SignInSchema = z.object({
  email: z
    .string()
    .email({
      message: 'Please enter valid email address',
    })
    .nonempty({ message: 'Email is required' }),
  password: z.string().min(5, {
    message: 'Password must be at lease 5 characters',
  }),
});
