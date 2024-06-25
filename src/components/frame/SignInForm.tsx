'use client';

import { GoogleIcon } from '@/lib/shreIcon';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';

const SignInForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      startTransition(async () => {
        const res = await signIn('credentials', {
          email: authData.email,
          password: authData.password,
          redirect: false,
        });
        console.log(res, '24');
        if (!res?.error) {
          router.push('/');
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setAuthData({ ...authData, [name]: value });
  };

  return (
    <>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={authData.email}
          callBack={handleChange}
        />
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <div className="flex justify-between">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
        </div>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={authData.password}
          callBack={handleChange}
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
          label={isPending ? 'Loading ...' : 'Login'}
          disabled={isPending}
          callBack={handleLogin}
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
    </>
  );
};

export default SignInForm;
