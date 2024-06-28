import { FileUploadIcon } from '@/lib/shreIcon';
import Image from 'next/image';
import { ChangeEvent } from 'react';

interface FileUploadProps {
  type?: 'profile' | 'banner';
  blobUrl: string;
  setBlobUrl: (e: string) => void;
}

const FileUpload = ({
  type = 'profile',
  blobUrl,
  setBlobUrl,
}: FileUploadProps) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setBlobUrl(imageUrl);
    }
  };

  const cssNames = [
    'relative',
    type === 'banner'
      ? 'w-full h-[153px] border border-dashed border-3 border-gray-300'
      : '',
  ].join(' ');

  return (
    <div className={cssNames}>
      <label htmlFor={type} className="cursor-pointer">
        {type === 'banner' && blobUrl && (
          <Image
            alt="bannerImg"
            src={blobUrl}
            width={465}
            height={153}
            style={{
              borderRadius: '2px',
              height: '153px',
            }}
          />
        )}
        {type === 'profile' && (
          <Image
            alt="profile"
            src={blobUrl ? blobUrl : '/default_profile.png'}
            width={type === 'profile' ? 101 : 465}
            height={type === 'profile' ? 101 : 153}
            style={{
              borderRadius: type === 'profile' ? '50%' : '2px',
              height: type === 'profile' ? '101px' : '153px',
            }}
          />
        )}

        <input
          id={type}
          accept="image/png, image/jpeg"
          onChange={(e) => handleFileChange(e)}
          className="hidden"
          type={'file'}
        />
        {type === 'banner' && !blobUrl && (
          <div className="flex h-[153px] flex-col items-center justify-center pt-5 pb-6">
            <FileUploadIcon />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG</p>
          </div>
        )}
      </label>
    </div>
  );
};

export default FileUpload;
