import { classNames } from '@/utils';

type TextProps = {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  weight?: '';
  active?: boolean;
  classes?: string;
};

const Text = ({
  label,
  size = 'md',
  active = true,
  classes = '',
}: TextProps) => {
  const cssNames = [
    size === 'sm'
      ? 'text-[12px]'
      : size === 'md'
        ? 'text-[18px]'
        : 'text-[20px]',
  ].join(' ');

  return (
    <p
      className={classNames(
        `${cssNames} font-`,
        `${active ? 'text-black font-bold' : 'text-[#4f4f4f]'}`,
        `${classes}`
      )}
    >
      {label}
    </p>
  );
};

export default Text;
