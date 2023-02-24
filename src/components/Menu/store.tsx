import { atom } from "recoil";
import B from "../../pages/B";
import PageForm from "../../pages/PageForm";

/** 菜单路径 */
export const menuRoutes = [
  {
    name: "表单",
    path: "/page-form",
    element: <PageForm />,
  },
  {
    name: "B",
    path: "/B",
    element: <B />,
  },
];

export const menuStore = atom({
  key: "menu",
  default: {
    list: menuRoutes,
    activePath: menuRoutes[0].path,
  },
});
