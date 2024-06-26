'use client';

import { CardType } from '@/types/card';
import Button from '../button/Button';
import Text from '../typography/Text';

const MyCard = ({ user_name, user_title }: CardType) => {
  return (
    <div className="flex justify-center items-center w-[280px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between flex-col py-5">
        <img
          className="w-[200px] h-[200px] mb-3 shadow-lg"
          src="/qr.png"
          alt={user_name}
        />
        <Text label={user_name || '-----'} />
        <Text label={user_title || '-----'} size="sm" classes="text-gray-500" />
        <div className="flex gap-5 mt-4 md:mt-6">
          <Button type="button" label="Edit" callBack={() => {}} />
          <Button type="button" label="View" callBack={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default MyCard;
