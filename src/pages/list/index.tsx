import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { ContentTitle, FloatItem, Link } from "../info";

export const Td = styled.td`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
  text-align: left;

  &:first-of-type {
    border-left: 1px solid #ddd;
  }
  &:last-of-type {
    border-right: 1px solid #ddd;
  }
`;
export const Th = Td.withComponent("th");

function List() {
  return (
    <>
      <ContentTitle
        className={css`
          justify-content: space-between;
        `}
      >
        <h2
          className={css`
            font-size: 16px;
            margin: unset;
          `}
        >
          列表
        </h2>
        <Link onClick={() => {}}>新建</Link>
      </ContentTitle>
      <FloatItem
        className={css`
          padding: unset !important; ;
        `}
      >
        <table
          border={1}
          className={css`
            width: 100%;
            border-collapse: collapse;
          `}
        >
          <tr>
            <Th>适用类型</Th>
            <Th>CPU系列</Th>
            <Th>制作工艺</Th>
            <Th>CPU主频</Th>
            <Th>核心数量</Th>
          </tr>
          <tr>
            <Td>January</Td>
            <Td>January</Td>
            <Td>January</Td>
            <Td>January</Td>
            <Td>January</Td>
          </tr>
        </table>
      </FloatItem>
    </>
  );
}

export default List;
