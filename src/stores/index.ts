import { atom } from "recoil";

export const countStore = atom({ key: "count", default: 0 });
export const requestBlockState = atom({ key: "requestBlockState", default: false });
