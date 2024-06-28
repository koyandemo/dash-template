import { cn } from '@/lib/utils';
import { ChangeEvent } from 'react';

type TextAreaProps = {
  name: string;
  value: string;
  label?: string;
  rows?: number;
  error?: { message: string } | null;
  placeholder: string;
  classes?: string;
  callBack: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({
  name,
  value,
  label = '',
  rows = 5,
  error = null,
  placeholder,
  classes = '',
  callBack,
}: TextAreaProps) => {
  return (
    <div className="mt-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'text-gray-700 rounded-md py-3 px-4 block w-full outline-none  bg-[#F7F7F7] border border-gray-400 placeholder:text-[13px]',
          classes
        )}
        rows={rows}
        name={name}
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

export default TextArea;
