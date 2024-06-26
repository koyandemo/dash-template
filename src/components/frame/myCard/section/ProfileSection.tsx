import Text from '@/components/typography/Text';
import FileUpload from '@/components/upload/FileUpload';
import { useState } from 'react';

const ProfileSection = () => {
  const [profileBlobUrl, setProfileBlobUrl] = useState('');
  const [bannerBlobUrl, setBannerBlobUrl] = useState('');

  return (
    <section
      id="profile-section"
      className="flex items-center flex-col gap-[20px] min-h-[360px] border-b"
    >
      <Text label="Profile" />
      <FileUpload
        type="profile"
        blobUrl={profileBlobUrl}
        setBlobUrl={setProfileBlobUrl}
      />
      <FileUpload
        type="banner"
        blobUrl={bannerBlobUrl}
        setBlobUrl={setBannerBlobUrl}
      />
    </section>
  );
};

export default ProfileSection;
