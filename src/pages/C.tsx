import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { countState } from "../App";

function C() {
  console.log("render C");

  return <div>1</div>;
}

export default C;
