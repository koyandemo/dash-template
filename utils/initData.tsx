import {
  AuthenticationIcon,
  DashboardIcon,
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
        // children: [{ label: 'eCommerce', route: '/' }],
      },
      {
        icon: <ProfileIcon />,
        label: 'My Cards',
        route: '/my-cards',
      },
      {
        icon: <TeamIcon />,
        label: 'Lead Collection',
        route: '/lead-collections',
      },
      {
        icon: <SettingIcon />,
        label: 'Settings',
        route: '/settings',
      },
    ],
  },
];

export const menuItemLogout = {
  icon: <AuthenticationIcon />,
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
