export type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;

// Just in case u want submenus

    submenu?: boolean;
    // subMenuItems?: SideNavItem[];
  };