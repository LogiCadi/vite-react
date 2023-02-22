import { atom } from "recoil";

export const countStore = atom({
  key: "count",
  default: 0,
});
