import { atom } from "recoil";
import B from "../../pages/B";
import Info from "../../pages/Info";

/** 菜单路径 */
export const menuRoutes = [
  {
    name: "详情",
    path: "/info",
    element: <Info />,
  },
  {
    name: "B页面",
    path: "/B",
    element: <B />,
  },
];

export const menuStore = atom({
  key: "menuStore",
  default: {
    list: menuRoutes,
    activePath: menuRoutes[0].path,
  },
});
