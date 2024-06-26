import { cn } from '@/lib/utils';

type TextProps = {
  label: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  weight?:
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | '';
  active?: boolean;
  classes?: string;
};

const Text = ({
  label,
  size = 'md',
  weight = '',
  active = true,
  classes = '',
}: TextProps) => {
  const cssNames = [
    size === 'xs'
      ? 'text-[10px]'
      : size === 'sm'
        ? 'text-[12px]'
        : size === 'md'
          ? 'text-[18px]'
          : 'text-[20px]',
  ].join(' ');

  return (
    <p
      className={cn(
        `${cssNames}`,
        `font-${weight}`,
        `${active ? 'text-black font-bold' : 'text-[#4f4f4f]'}`,
        `${classes}`
      )}
    >
      {label}
    </p>
  );
};

export default Text;
