import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Li, Wrap } from "./css";
import { menuStore } from "./store";

export default function Menu() {
  const [menuState, setMenuState] = useRecoilState(menuStore);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuState({ ...menuState, activePath: pathname });
  }, [pathname]);

  return (
    <Wrap>
      <ul>
        {menuState.list.map((item) => (
          <NavLink to={item.path} key={item.path}>
            <Li active={item.path === menuState.activePath}>{item.name}</Li>
          </NavLink>
        ))}
      </ul>
    </Wrap>
  );
}
