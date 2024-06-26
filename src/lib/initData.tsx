import {
  DashboardIcon,
  LogoutIcon,
  ProfileIcon,
  SettingIcon,
  TeamIcon,
} from './shreIcon';

export const menuGroups = [
  {
    menuItems: [
      {
        icon: <DashboardIcon />,
        label: 'Dashboard',
        route: '/',
        group: 'dashboard',
        // children: [{ label: 'eCommerce', route: '/' }],
      },
      {
        icon: <ProfileIcon />,
        label: 'My Cards',
        route: '/my-cards',
        group: 'my-cards',
      },
      {
        icon: <TeamIcon />,
        label: 'Lead Collection',
        route: '/lead-collections',
        group: 'lead-collections',
      },
      {
        icon: <SettingIcon />,
        label: 'Settings',
        route: '/settings',
        group: 'settings',
      },
    ],
  },
];

export const menuItemLogout = {
  icon: <LogoutIcon />,
  label: 'Logout',
  route: '/sign-in',
};

export const leadCollectionDatas = [
  {
    profile:
      'https://t4.ftcdn.net/jpg/06/91/91/67/240_F_691916723_aTS3mAqRjvZybMGP9K5MrVEVoKeVt04A.jpg',
    name: 'Jason',
    email: 'jason@gmail.com',
    phone_number: '0811288312',
    industry: 'Wireless',
    socials: '',
  },
  {
    profile:
      'https://t4.ftcdn.net/jpg/06/91/91/67/240_F_691916723_aTS3mAqRjvZybMGP9K5MrVEVoKeVt04A.jpg',
    name: 'Jason',
    email: 'jason@gmail.com',
    phone_number: '0811288312',
    industry: 'Wireless',
    socials: '',
  },
  {
    profile:
      'https://t4.ftcdn.net/jpg/06/91/91/67/240_F_691916723_aTS3mAqRjvZybMGP9K5MrVEVoKeVt04A.jpg',
    name: 'Jason',
    email: 'jason@gmail.com',
    phone_number: '0811288312',
    industry: 'Wireless',
    socials: '',
  },
  {
    profile:
      'https://t4.ftcdn.net/jpg/06/91/91/67/240_F_691916723_aTS3mAqRjvZybMGP9K5MrVEVoKeVt04A.jpg',
    name: 'Jason',
    email: 'jason@gmail.com',
    phone_number: '0811288312',
    industry: 'Wireless',
    socials: '',
  },
  {
    profile:
      'https://t4.ftcdn.net/jpg/06/91/91/67/240_F_691916723_aTS3mAqRjvZybMGP9K5MrVEVoKeVt04A.jpg',
    name: 'Jason',
    email: 'jason@gmail.com',
    phone_number: '0811288312',
    industry: 'Wireless',
    socials: '',
  },
];

export const cardColors = [
  '#F9F9F9',
  '#FFE8A3',
  '#FFA300',
  '#14AE5C',
  '#0D99FF',
  '#FF48E2',
  '#9747FF',
];

export const cardBanners = [
  'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/311039/pexels-photo-311039.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/243971/pexels-photo-243971.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/268415/pexels-photo-268415.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=600',
];
