'use client';

import { classNames } from '@/lib/utils';
import useDialog from '@/store/useDialog';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import Text from '../typography/Text';

type itemType = {
  icon: ReactNode;
  label: string;
  route: string;
};

interface SidebarItemProps {
  item: itemType;
  pageName: string;
  setPageName: (_: string) => void;
}

const SidebarItem = ({ item, pageName, setPageName }: SidebarItemProps) => {
  const router = useRouter();
  const { openDialog } = useDialog();

  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : '';
    setPageName(updatedPageName);
    if (item.route === '/sign-in') {
      openDialog('route', '/sign-in');
    } else {
      router.push(item.route);
    }
  };

  const pathname = usePathname();

  const isActive = (item: itemType) => {
    if (item.route === pathname) return true;
    // if (item.children) {
    //   return item.children.some((child: any) => isActive(child));
    // }
    return false;
  };

  const isItemActive = isActive(item);

  return (
    <>
      <li>
        <div
          // href={item.route}
          onClick={handleClick}
          className={classNames(
            'group relative flex items-center  gap-[20px] rounded-sm px-4 py-3 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 cursor-pointer',
            `${isItemActive ? 'bg-[#F7F7F7] rounded-[5px]' : ''}`
          )}
        >
          {item.icon}
          <Text label={item.label} size="sm" active={isItemActive} />
          {/* <p
            className={classNames(
              'text-[12px] font-medium',
              `${isItemActive ? 'text-black' : 'text-[#4f4f4f]'}`
            )}
          >
            {item.label}
          </p> */}
          {/* {item.children && (
            <svg
              className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                pageName === item.label.toLowerCase() && 'rotate-180'
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                fill=""
              />
            </svg>
          )} */}
        </div>
      </li>
    </>
  );
};

export default SidebarItem;
