import styled from "@emotion/styled";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #262f3e;
  color: #c1c6c8;
  height: 50px;
  box-shadow: inset 0 -1px 0 0 #344258;
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export default function Header() {
  return (
    <Wrap>
      <Link>react</Link>
      <Link>user</Link>
    </Wrap>
  );
}
