type ButtonProps = {
  label: string;
};

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="bg-[#6D3DF5] text-white font-bold py-1 px-10 w-full rounded-md hover:bg-blue-500">
      {label}
    </button>
  );
};

export default Button;
