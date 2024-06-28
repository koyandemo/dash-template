'use client';

import { SignInSchema } from '@/types/schema/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from '../button/Button';
import InputHook from '../input/InputHook';

const SignInForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState('');

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
        if (res?.error) {
          console.log(res?.error);
          setErrorMessage('Incorrect email or password.');
          setTimeout(() => {
            setErrorMessage('');
          }, 3000);
          return;
        }
        if (!res?.error) {
          router.push('/my-cards');
        }
      });
    } catch (err) {
      setErrorMessage('Incorrect email or password.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="mt-4 w-full">
        <InputHook
          id="email"
          type="email"
          label="Email"
          placeholder="Email"
          register={register('email', { required: true })}
          error={errors['email']}
        />
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <InputHook
          id="password"
          type="password"
          label="Password"
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
      {errorMessage && (
        <span className="inline-block text-error text-xs">{errorMessage}</span>
      )}
      <div className="mt-8  flex flex-col w-full">
        <Button
          type="submit"
          label={isPending ? 'Loading ...' : 'Login'}
          disabled={isPending}
          width="full"
          height="md"
          // classes="h-[50px]"
        />
      </div>
      {/* <a
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
      </a> */}
    </form>
  );
};

export default SignInForm;
