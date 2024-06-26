import { classNames } from '@/lib/utils';

// enum widthTypeEnum {
//   padding = 'padding',
//   fixed = 'fixed',
//   full = 'full',
// }

type ButtonProps = {
  label: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  widthType?: 'padding' | 'full';
  isOutline?: boolean;
  classes?: string;
  disabled?: boolean;
  callBack?: () => void;
};

const Button = ({
  label,
  type = 'button',
  widthType = 'padding',
  isOutline,
  classes = '',
  disabled = false,
  callBack,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(
        'font-bold py-1 px-5 rounded-sm',
        `${widthType === 'full' ? 'w-full' : ''}`,
        `${isOutline ? 'border border-primary' : 'bg-primary text-white'}`,
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
