import { cn } from '@/lib/utils';

type ButtonProps = {
  label: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  rounded?: 'sm' | 'md' | 'full';
  width?: 'auto' | 'full';
  height?: 'sm' | 'md';
  isOutline?: boolean;
  classes?: string;
  disabled?: boolean;
  callBack?: () => void;
};

const Button = ({
  label,
  type = 'button',
  rounded = 'sm',
  width = 'auto',
  height = 'sm',
  isOutline,
  classes = '',
  disabled = false,
  callBack,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        'font-bold py-1 px-5',
        `rounded-${rounded}`,
        `w-[${width === 'auto' ? 'auto' : 'full'}]`,
        `h-[${height === 'sm' ? '32px' : '50px'}]`,
        `${isOutline ? 'border border-primary border-2 text-primary' : 'bg-primary text-white'}`,
        `${classes}`
      )}
      onClick={() => {
        if (callBack) {
          callBack();
        } else {
          return;
        }
      }}
    >
      {label}
    </button>
  );
};

export default Button;
