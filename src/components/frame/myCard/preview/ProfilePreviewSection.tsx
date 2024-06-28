import Button from '@/components/button/Button';
import Text from '@/components/typography/Text';
import Image from 'next/image';

const ProfilePreviewSection = () => {
  return (
    <section id="profile-preview-section" className="w-[inherit]">
      <div className="w-full h-[200px] relative">
        <Image
          id="preview-banner"
          alt="preview-banner"
          src={'/images/preview-banner.png'}
          layout="fill"
        />

        <Image
          id="preview-banner"
          alt="preview-banner"
          src={'/images/preview-banner.png'}
          width={150}
          height={150}
          className="absolute left-[50%] translate-x-[-50%] bottom-[-50px] rounded-full border border-2 borer-gray-300"
          style={{ height: '150px' }}
        />
      </div>
      <div className="flex gap-[0px] flex-col justify-center items-center mt-[55px]">
        <Text label="Emma Ei" />
        <Text label="Graphic Designer @ Me.com" size="sm" />
        <Text label="emma@example.com" active={false} size="xs" />
      </div>
      <div className="flex gap-[5px] flex-col mt-[10px]">
        <Text label="Bio" />
        <Text
          label="I’m a 28-year-old graphic designer based in London, UK. I’m enthusiastic about creating visually appealing designs and often participates in local art exhibitions and creative gatherings to showcase my work and connect with like-minded individuals."
          size="sm"
          active={false}
        />
      </div>
      <div className="flex w-full justify-center gap-5 mt-4 md:mt-6">
        <Button
          type="button"
          label="Save"
          rounded="full"
          height="md"
          classes="w-[185px]"
          callBack={() => {}}
        />
        <Button
          type="button"
          label="Exchange"
          rounded="full"
          classes="w-[185px]"
          callBack={() => {}}
        />
      </div>
    </section>
  );
};

export default ProfilePreviewSection;
