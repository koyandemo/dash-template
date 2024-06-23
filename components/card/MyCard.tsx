'use client';

import Button from '../button/Button';
import Text from '../typography/Text';

const MyCard = () => {
  return (
    <div className="flex justify-center items-center w-[280px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between flex-col py-5">
        <img
          className="w-[200px] h-[200px] mb-3 shadow-lg"
          src="/qr.png"
          alt="Bonnie image"
        />
        <Text label="Bonnie Green" />
        <Text label="Visual Designer" size="sm" classes="text-gray-500" />
        <div className="flex gap-5 mt-4 md:mt-6">
          <Button label="Edit" callBack={() => {}} />
          <Button label="View" callBack={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default MyCard;
