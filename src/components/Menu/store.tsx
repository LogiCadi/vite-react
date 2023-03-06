import { atom } from "recoil";
import Info from "../../pages/info";
import List from "../../pages/list";

/** 菜单路径 */
export const menuRoutes = [
  {
    name: "详情",
    path: "/info",
    element: <Info />,
  },
  {
    name: "列表",
    path: "/list",
    element: <List />,
  },
];

export const menuStore = atom({
  key: "menuStore",
  default: {
    list: menuRoutes,
    activePath: menuRoutes[0].path,
  },
});
