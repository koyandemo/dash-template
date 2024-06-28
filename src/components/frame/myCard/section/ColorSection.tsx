import Text from '@/components/typography/Text';
import { cardColors } from '@/lib/initData';

const ColorSection = () => {
  return (
    <section
      id="colors-section"
      className="flex flex-col gap-[20px] min-h-[130px] border-b"
    >
      <Text label="Colors" classes="text-center" />
      <div className="flex justify-between">
        {cardColors.map((color: string) => (
          <div
            key={color}
            className="w-[48px] h-[48px] rounded-full border border-gray-200"
            style={{ background: color }}
          />
        ))}
      </div>
    </section>
  );
};

export default ColorSection;
