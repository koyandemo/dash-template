import { classNames } from '@/lib/utils';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
  id: string;
  type: string;
  placeholder: string;
  classes?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

const InputHook = ({
  id,
  type,
  placeholder,
  classes = '',
  register,
  error,
}: InputProps) => {
  return (
    <div>
      <input
        className={classNames(
          'text-gray-700 rounded-md py-3 px-4 block w-full outline-none  bg-[#F7F7F7] border border-gray-400 placeholder:text-[13px]',
          classes
        )}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        // required
      />
      {error && (
        <span className="inline-block text-error text-xs">
          {error?.message}
        </span>
      )}
    </div>
  );
};

export default InputHook;
