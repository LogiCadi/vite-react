import { atom } from "recoil";

export const menuStore = atom({
  key: "menu",
  default: {
    list: [
      { name: "A页面", path: "/A" },
      { name: "B页面", path: "/B" },
      { name: "C页面", path: "/C" },
    ],
    activePath: "/A",
  },
});
