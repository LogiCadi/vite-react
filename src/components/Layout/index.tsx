import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Menu from "../Menu";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Center = styled.div`
  display: flex;
  flex: 1;
`;
const Main = styled.div`
  flex: 1;
`;

export default function Layout() {
  return (
    <Wrap>
      <Header />
      <Center>
        <Menu />
        <Main>
          <Outlet />
        </Main>
      </Center>
    </Wrap>
  );
}
