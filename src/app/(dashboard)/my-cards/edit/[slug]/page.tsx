'use client';

import MediaPreviewSection from '@/components/frame/myCard/preview/MediaPreviewSection';
import ProfilePreviewSection from '@/components/frame/myCard/preview/ProfilePreviewSection';
import SocialMediaPreviewSection from '@/components/frame/myCard/preview/SocialMediaPreviewSection';
import ActionSection from '@/components/frame/myCard/section/ActionSection';
import ColorSection from '@/components/frame/myCard/section/ColorSection';
import LayoutSection from '@/components/frame/myCard/section/LayoutSection';
import MediaSection from '@/components/frame/myCard/section/MediaSection';
import ProfileFormSection from '@/components/frame/myCard/section/ProfileFormSection';
import ProfileSection from '@/components/frame/myCard/section/ProfileSection';

const MyCardEdit = () => {
  return (
    <div className="flex p-5 justify-between gap-[20px] m-auto w-[1000px] h-[800px] border border-[0.5px] border-[#1009250D] shadow-lg rounded-md">
      <section
        id="edit-section"
        className="flex flex-col gap-[10px] w-[500px] overflow-y-scroll border-r pr-5 shreScrollBar pb-10"
      >
        <LayoutSection />
        <ProfileSection />
        <ProfileFormSection />
        <MediaSection />
        <ColorSection />
        <ActionSection />
      </section>
      <section
        id="preview-section"
        className="flex flex-col gap-[20px] items-center max-w-[420px] border border-3 border-gray-300 rounded-[16px] overflow-x-hidden overflow-y-scroll shreScrollBar p-5"
      >
        <ProfilePreviewSection />
        <MediaPreviewSection />
        <SocialMediaPreviewSection />
        {/* <Image
          alt="user-preview"
          src={'/images/user-preview.png'}
          width={500}
          height={700}
          style={{ height: '700px', objectFit: 'contain' }}
        /> */}
      </section>
    </div>
  );
};

export default MyCardEdit;

// border: 0.5px solid

// border: 3px solid #FFFFFF
