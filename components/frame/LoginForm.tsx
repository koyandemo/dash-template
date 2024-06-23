'use client';

import { GoogleIcon } from '@/lib/shreIcon';
import Button from '../button/Button';
import Input from '../input/Input';

const LoginForm = () => {
  const handleLogin = () => {};

  return (
    <>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <Input type="email" placeholder="Email" value="" />
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <div className="flex justify-between">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
        </div>
        <Input type="password" placeholder="Password" value="" />
        <a
          href="#"
          className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
        >
          Forget Password?
        </a>
      </div>
      <div className="mt-8">
        <Button
          label="Login"
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

export default LoginForm;
