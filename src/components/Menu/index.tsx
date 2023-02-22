import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Li, Wrap } from "./css";
import { menuStore } from "./store";
import { Menu as TdMenu, Button } from "tdesign-react";
import { ViewListIcon, ServerIcon, Edit1Icon, RootListIcon, CheckIcon, UserIcon, AppIcon, LoginIcon } from "tdesign-icons-react";
import 'tdesign-react/es/style/index.css'

const { MenuGroup, MenuItem, SubMenu } = TdMenu;

export default function Menu() {
  const [menuState, setMenuState] = useRecoilState(menuStore);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuState({ ...menuState, activePath: pathname });
  }, [pathname]);

  return (
    // <Wrap>
    //   <ul>
    //     {menuState.list.map((item) => (
    //       <NavLink to={item.path}>
    //         <Li active={item.path === menuState.activePath}>{item.name}</Li>
    //       </NavLink>
    //     ))}
    //   </ul>
    // </Wrap>
    <TdMenu value={menuState.activePath}>
      <MenuGroup title="主导航">
        <MenuItem value="item1" icon={<AppIcon />}>
          仪表盘
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="组件">
        <SubMenu title="列表项" value="2-1" icon={<ServerIcon />}>
          <MenuItem value="2-1-1">基础列表项</MenuItem>
          <MenuItem value="2-1-2">卡片列表项</MenuItem>
          <MenuItem value="2-1-3">筛选列表项</MenuItem>
          <MenuItem value="2-1-4">树状筛选列表项</MenuItem>
        </SubMenu>
        <MenuItem value="2-2" icon={<Edit1Icon />}>
          表单项
        </MenuItem>
        <MenuItem value="2-3" icon={<RootListIcon />}>
          详情页
        </MenuItem>
        <MenuItem value="2-4" icon={<CheckIcon />}>
          结果页
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="更多">
        <MenuItem value="item3" icon={<UserIcon />}>
          个人页
        </MenuItem>
        <MenuItem value="item4" icon={<LoginIcon />}>
          登录页
        </MenuItem>
      </MenuGroup>
    </TdMenu>
  );
}
