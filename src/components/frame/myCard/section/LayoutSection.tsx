import Text from '@/components/typography/Text';
import {
  LayoutBusinessFrame,
  LayoutHightLightFrame,
  LayoutPersonalFrame,
} from '@/lib/shreIcon';

const LayoutSection = () => {
  return (
    <section
      id="layout-section"
      className="flex flex-col gap-[15px] min-h-[300px] border-b"
    >
      <Text label="Layout" classes="text-center" />
      <div className="flex justify-center gap-[50px]">
        <div className="flex flex-col gap-[10px] text-center">
          <LayoutPersonalFrame />
          <Text label="Personal" size="sm" weight="normal" />
        </div>
        <div className="flex flex-col gap-[10px] text-center">
          <LayoutBusinessFrame />
          <Text label="Business" size="sm" weight="normal" />
        </div>
        <div className="flex flex-col gap-[10px] text-center">
          <LayoutHightLightFrame />
          <Text label="Hight Lights" size="sm" weight="normal" />
        </div>
      </div>
    </section>
  );
};

export default LayoutSection;
