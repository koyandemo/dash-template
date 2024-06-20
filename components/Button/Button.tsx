type ButtonProps = {
  label: string;
};

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="bg-black text-white font-bold py-2 px-4 w-full rounded-md hover:bg-gray-800">
      {label}
    </button>
  );
};

export default Button;
