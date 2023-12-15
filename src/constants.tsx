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
    icon: <Icon icon="lucide:droplets" width="24" height="24" />,
  },
  {
    title: 'Energia',
    path: '/Energy',
    icon: <Icon icon="lucide:plug-zap" width="24" height="24" />,
  },
  {
    title: 'Residuos',
    path: '/Waste',
    icon: <Icon icon="lucide:rotate-3d" width="24" height="24" />,
  },
  {
    title: 'Educación',
    path: '/Education',
    icon: <Icon icon="lucide:graduation-cap" width="24" height="24" />,
  },
];