import { classNames } from '@/lib/utils';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
  id: string;
  type: string;
  label?: string;
  placeholder: string;
  classes?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

const InputHook = ({
  id,
  type,
  label = '',
  placeholder,
  classes = '',
  register,
  error,
}: InputProps) => {
  return (
    <div className="mt-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
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
