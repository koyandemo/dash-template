import { cardBanners } from '@/lib/initData';
import Image from 'next/image';

const MediaPreviewSection = () => {
  return (
    <div className="flex w-[400px] gap-[16px] min-h-[200px] overflow-y-hidden shreScrollBar">
      {cardBanners.map((banner, i: number) => (
        <div
          key={i}
          className="min-w-[343px] h-[192px] rounded-[16px]  bg-white border border-[0.5px] border-[#1009250D] overflow-hidden"
        >
          <Image
            id={`banner-${i}`}
            alt={`banner-${i}`}
            width={343}
            height={192}
            src={banner}
            style={{
              height: '192px',
              borderRadius: '0.5px',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default MediaPreviewSection;
