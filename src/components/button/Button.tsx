import { classNames } from '@/lib/utils';

// enum widthTypeEnum {
//   padding = 'padding',
//   fixed = 'fixed',
//   full = 'full',
// }

type ButtonProps = {
  label: string;
  widthType?: 'padding' | 'full';
  isOutline?: boolean;
  classes?: string;
  disabled?: boolean;
  callBack: () => void;
};

const Button = ({
  label,
  widthType = 'padding',
  isOutline,
  classes = '',
  disabled = false,
  callBack,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={classNames(
        'font-bold py-1 px-5 rounded-sm',
        `${widthType === 'full' ? 'w-full' : ''}`,
        `${isOutline ? 'border border-primary' : 'bg-primary text-white'}`,
        `${classes}`
      )}
      onClick={callBack}
    >
      {label}
    </button>
  );
};

export default Button;
