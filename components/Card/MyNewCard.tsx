import { PlusIcon } from '@/utils/shreIcon';
import Text from '../typography/Text';

const MyNewCard = () => {
  return (
    <div className="w-[280px] flex flex-col gap-5 items-center justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
      <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#F7F7F7]">
        <PlusIcon />
      </div>
      <Text label="Create New Card" size="sm" classes="font-normal" />
    </div>
  );
};

export default MyNewCard;
