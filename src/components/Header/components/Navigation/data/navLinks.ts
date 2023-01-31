import { NavLinks } from "../types";
import { AppRouterPath } from "../../../../../shared/types";

const navLinks: NavLinks[] = [
  {
    id: 1,
    path: AppRouterPath.HOME,
    name: "Home",
  },
  {
    id: 2,
    path: AppRouterPath.PHOTOS,
    name: "Photo",
  },
  {
    id: 3,
    path: AppRouterPath.LOGIN,
    name: "Log In",
  },
];

export default navLinks;
