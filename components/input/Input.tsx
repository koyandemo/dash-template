type InputProps = {
  type: string;
  value: string;
  placeholder: string;
};

const Input = ({ type, value, placeholder }: InputProps) => {
  return (
    <input
      className="text-gray-700 rounded-md py-3 px-4 block w-full outline-none  bg-[#F7F7F7] border-none placeholder:text-[13px]"
      type={type}
      value={value}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
