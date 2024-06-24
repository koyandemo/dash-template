import LoginForm from '@/src/components/frame/LoginForm';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-shrink-0 w-[500px] px-5 sm:px-0 bg-white rounded-2xl border">
      <div className="w-full p-8 lg:w-[70%]">
        <p className="text-xl text-gray-600 text-center">Welcome back!</p>
        <LoginForm />
        <div className="mt-4 flex items-center w-full text-center">
          <a
            href="#"
            className="text-xs text-gray-500 capitalize text-center w-full"
          >
            Don&apos;t have any account yet?
            <span className="text-blue-700"> Sign Up</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
