import { classNames } from '@/lib/utils';
import { ChangeEvent } from 'react';

type InputProps = {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  classes?: string;
  callBack: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  name,
  type,
  value,
  placeholder,
  classes = '',
  callBack,
}: InputProps) => {
  return (
    <input
      className={classNames(
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
  );
};

export default Input;
