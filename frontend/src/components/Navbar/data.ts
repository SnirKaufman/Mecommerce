// import { ReactComponentElement } from "react";

import { IconType } from "react-icons";
import { LuShoppingCart } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { FiUser } from "react-icons/fi";

type NAVBAR_PAGES = {
  label: string;
  route: string;
};

type NAVBAR_ICONS = {
  IconComponent: IconType;
  IconRoute: string;
};

export const NAVBAR_PAGES: NAVBAR_PAGES[] = [
  { label: "Home", route: "/" },
  { label: "iPhone", route: "/iphone" },
  { label: "Mac", route: "/mac" },
  { label: "Airpods", route: "/airpods" },
];

export const NAVBAR_ICONS: NAVBAR_ICONS[] = [
  { IconComponent: GrFavorite, IconRoute: "/favorites" },
  { IconComponent: FiUser, IconRoute: "/profile" },
  { IconComponent: LuShoppingCart, IconRoute: "/cart" },
];
