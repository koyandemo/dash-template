import { classNames } from '@/utils';

type TextProps = {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
};

const Text = ({ label, size = 'md', active = true }: TextProps) => {
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
        `${cssNames} font-medium`,
        `${active ? 'text-black' : 'text-[#4f4f4f]'}`
      )}
    >
      {label}
    </p>
  );
};

export default Text;
