import {
  AuthenticationIcon,
  DashboardIcon,
  ProfileIcon,
  SettingIcon,
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
