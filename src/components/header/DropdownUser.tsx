import ClickOutside from '@/src/components/ClickOutside';
import {
  AngleDownIcon,
  ContactIcon,
  LogoutIcon,
  ProfileIcon,
  SettingIcon,
} from '@/src/lib/shreIcon';
import useDialog from '@/src/store/useDialog';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const DropDownItem = () => {
  const { openDialog } = useDialog();
  const handleLogout = () => {
    openDialog('route', '/sign-in');
  };

  return (
    <div
      className={`absolute  right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
    >
      <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
        <li>
          <Link
            href="/profile"
            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            <ProfileIcon width={22} height={22} />
            My Profile
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            <ContactIcon />
            My Contacts
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            <SettingIcon width={22} height={22} />
            Account Settings
          </Link>
        </li>
      </ul>
      <button
        className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
        onClick={() => {
          handleLogout();
        }}
      >
        <LogoutIcon />
        Log Out
      </button>
    </div>
  );
};

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Bonnie Green
          </span>
          <span className="block text-xs">User</span>
        </span>
        <figure>
          <Image
            src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            width={40}
            height={40}
            style={{
              borderRadius: '50%',
              height: '40px',
              pointerEvents: 'none',
            }}
            alt="User"
          />
        </figure>

        <AngleDownIcon />
      </Link>
      {dropdownOpen && <DropDownItem />}
    </ClickOutside>
  );
};

export default DropdownUser;
