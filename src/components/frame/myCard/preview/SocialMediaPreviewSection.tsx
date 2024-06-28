import Text from '@/components/typography/Text';
import Image from 'next/image';

const SocialMediaPreviewSection = () => {
  return (
    <div className="flex gap-[28px] flex-wrap justify-between">
      <div className="flex flex-col items-center gap-[5px]">
        <Image alt="phone" src="/logo/phone_1.png" width={104} height={104} />
        <Text label="Phone" active={false} />
      </div>
      <div className="flex flex-col items-center gap-[5px]">
        <Image
          alt="linkedin"
          src="/logo/linkedin_1.svg"
          width={104}
          height={104}
        />
        <Text label="Linkedin" active={false} />
      </div>

      <div className="flex flex-col items-center gap-[5px]">
        <Image
          alt="instagram"
          src="/logo/instagram_1.svg"
          width={104}
          height={104}
        />
        <Text label="Instagram" active={false} />
      </div>

      <div className="flex flex-col items-center gap-[5px]">
        <Image
          alt="facebook"
          src="/logo/facebook_1.svg"
          width={104}
          height={104}
        />
        <Text label="Facebook" active={false} />
      </div>

      <div className="flex flex-col items-center gap-[5px]">
        <Image
          alt="whatsapp"
          src="/logo/whatsapp_1.svg"
          width={104}
          height={104}
        />
        <Text label="Whatsapp" active={false} />
      </div>

      <div className="flex flex-col items-center gap-[5px]">
        <Image
          alt="outlook"
          src="/logo/outlook_1.svg"
          width={104}
          height={104}
        />
        <Text label="Outlook" active={false} />
      </div>
    </div>
  );
};

export default SocialMediaPreviewSection;
