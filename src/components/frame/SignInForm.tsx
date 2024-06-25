'use client';

import { GoogleIcon } from '@/lib/shreIcon';
import { SignInSchema } from '@/types/schema/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from '../button/Button';
import InputHook from '../input/InputHook';

const SignInForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  // const [authData, setAuthData] = useState({
  //   email: '',
  //   password: '',
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = async (value: z.infer<typeof SignInSchema>) => {
    try {
      startTransition(async () => {
        const res = await signIn('credentials', {
          email: value.email,
          password: value.password,
          redirect: false,
        });
        if (!res?.error) {
          router.push('/');
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <InputHook
          id="email"
          type="email"
          placeholder="Email"
          register={register('email', { required: true })}
          error={errors['email']}
        />
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <div className="flex justify-between">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
        </div>
        <InputHook
          id="password"
          type="password"
          placeholder="********"
          register={register('password', { required: true })}
          error={errors['password']}
        />
        <a
          href="#"
          className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
        >
          Forget Password?
        </a>
      </div>
      <div className="mt-8">
        <Button
          type="submit"
          label={isPending ? 'Loading ...' : 'Login'}
          disabled={isPending}
          widthType="full"
          classes="h-[45px]"
        />
      </div>
      <a
        href="#"
        className=" flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
      >
        <div className="flex px-5 justify-center w-full py-2">
          <div className="min-w-[30px]">
            <GoogleIcon />
          </div>
          <div className="flex w-full justify-center">
            <h1 className="whitespace-nowrap text-gray-600 font-bold">
              Sign in with Google
            </h1>
          </div>
        </div>
      </a>
    </form>
  );
};

export default SignInForm;
