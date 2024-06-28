'use client';

import { FileUploadIcon, LoadingIcon } from '@/lib/shreIcon';
import { useRouter } from 'next/navigation';
import Papa from 'papaparse';
import { ChangeEvent, useState } from 'react';
import Text from '../typography/Text';

const CsvUpload = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (loading) {
      return;
    }
    if (e.target.files) {
      setLoading(true);
      Papa.parse(e.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          console.log(results.data);
          router.push('/lead-collections');
        },
      });
    }
  };

  return (
    <div className="relative flex flex-col gap-[100px] w-full">
      <Text
        label="Import Lead Collections"
        size="md"
        active={false}
        weight="bold"
      />
      <label
        htmlFor="dropzone-file"
        className="relative flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <FileUploadIcon />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Select CSV </span> to upload
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            File must be end with <span className="font-semibold">.csv</span>{' '}
            extension with maximum file size 50MB
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          accept=".csv"
          className="hidden"
          onChange={(e) => handleFileChange(e)}
        />
      </label>
      {loading && (
        <div className="fixed flex justify-center pl-[200px] pt-[350px] top-0 z-[999] left-0 w-full h-full bg-[#00000080]">
          <LoadingIcon />
        </div>
      )}
    </div>
  );
};

export default CsvUpload;
