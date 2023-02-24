import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { countStore } from "../stores";

function PageForm() {
  const [count, setCount] = useRecoilState(countStore);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>A count is {count}</button>
      <NavLink to="/B">to B</NavLink>
    </>
  );
}

export default PageForm;
