import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { countStore, requestBlockState } from "../stores";
import a, { changeA, getA } from "../utils/useLoad";
import { FloatItem } from "./Info";

function B() {
  const [count, setCount] = useRecoilState(countStore);
  const [requestBlock, setRequestBlock] = useRecoilState(requestBlockState);

  const http = () => {
    if (requestBlock) {
      return;
    } else {
      setRequestBlock(true);
    }
    fetch("https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i5-1250P&id=4719").catch((res) => {
      setRequestBlock(false);
    });
  };

  return (
    <FloatItem>
      <button onClick={() => setCount((count) => count + 1)}>B count is {count}</button>
      <p>
        <button onClick={http} disabled={requestBlock}>
          request
        </button>
      </p>
      <NavLink to="/info">
        <button>to A</button>
      </NavLink>
    </FloatItem>
  );
}

export default B;
