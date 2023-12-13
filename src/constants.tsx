import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Agua',
    path: '/Water',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
  },
  {
    title: 'Energia',
    path: '/Energy',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Residuos',
    path: '/Waste',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
  },
  {
    title: 'Educación',
    path: '/Education',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];