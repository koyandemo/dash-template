import { classNames } from '@/lib/utils';

interface InputRefProps {
  refObj: React.RefObject<HTMLInputElement> | null;
  placeHolder?: string;
  callBack: () => void;
}

const InputRef = ({
  refObj = null,
  placeHolder = '',
  callBack,
}: InputRefProps) => {
  return (
    <input
      className={classNames(
        'text-gray-700 rounded-md py-3 px-4 block w-full outline-none  bg-[#F7F7F7] border border-gray-400 placeholder:text-[13px]'
      )}
      ref={refObj}
      onChange={callBack}
      placeholder={placeHolder}
    />
  );
};

export default InputRef;
