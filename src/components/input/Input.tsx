import { cn } from '@/lib/utils';
import { ChangeEvent } from 'react';

type InputProps = {
  name: string;
  type: string;
  value: string;
  label?: string;
  error?: { message: string } | null;
  placeholder: string;
  classes?: string;
  callBack: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  name,
  type,
  value,
  label = '',
  error = null,
  placeholder,
  classes = '',
  callBack,
}: InputProps) => {
  return (
    <div className="mt-4 w-[inherit]">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        className={cn(
          'text-gray-700 rounded-md py-3 px-4 block w-full outline-none  bg-[#F7F7F7] border border-gray-400 placeholder:text-[13px]',
          classes
        )}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={callBack}
        required
      />
      {error && (
        <span className="inline-block text-error text-xs">
          {error?.message}
        </span>
      )}
    </div>
  );
};

export default Input;
