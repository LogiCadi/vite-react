import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 200px;
  background-color: #1e222d;
  color: #c1c6c8;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Li = styled.li<{ active: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  color: ${(props) => props.active && "#FFF"};
  background-color: ${(props) => props.active && "#006eff"};
  &:hover {
    background-color: ${(props) => (props.active ? "#006eff" : "#262f3e")};
  }
`;
