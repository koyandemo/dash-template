import Text from '@/components/typography/Text';
import { cardBanners } from '@/lib/initData';
import { UploadIcon } from '@/lib/shreIcon';
import Image from 'next/image';

const MediaSection = () => {
  return (
    <section
      id="media-section"
      className="flex flex-col gap-[20px] min-h-[180px] border-b"
    >
      <Text label="Add photos/videos" classes="text-center" />
      <div className="flex gap-[16px] min-h-[132px] overflow-y-hidden shreScrollBar">
        <div className="flex flex-col items-center justify-center min-w-[104px] h-[100px] rounded-[16px] px-[8px] py-[16px] bg-white border border-[0.5px] border-[#1009250D]">
          <UploadIcon />
          <div className="text-center">
            <Text
              label="Upload a photo or"
              size="xs"
              weight="medium"
              active={false}
            />
            <Text label="a video" size="xs" active={false} />
            <Text label="(max xxMB)" size="xs" active={false} />
          </div>
        </div>

        {cardBanners.map((banner, i: number) => (
          <div
            key={i}
            className="min-w-[104px] h-[100px] rounded-[16px]  bg-white border border-[0.5px] border-[#1009250D] overflow-hidden"
          >
            <Image
              id={`banner-${i}`}
              alt={`banner-${i}`}
              width={104}
              height={100}
              src={banner}
              style={{
                height: '100px',
                borderRadius: '0.5px',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaSection;
