import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { countStore } from "../stores";

function B() {
  const [count, setCount] = useRecoilState(countStore);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>B count is {count}</button>
      <NavLink to="/A">to A</NavLink>
    </>
  );
}

export default B;
