import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { atom, useRecoilState } from "recoil";

/** 通用 标题栏 */
const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 18px;
  background-color: #fff;
`;
/** 通用 浮动面板 */
export const FloatItem = styled.div`
  background-color: #fff;
  padding: 12px;
  margin: 12px;
`;

export const infoState = atom({
  key: "infoState",
  default: {
    name: "Intel 酷睿 i7 12700H",
    group: [
      {
        title: "基本信息",
        value: [
          { label: "适用类型", value: "笔记本" },
          { label: "CPU系列", value: "酷睿i7 12代系列" },
          { label: "制作工艺", value: "10纳米" },
        ],
      },
      {
        title: "性能参数",
        value: [
          { label: "CPU主频", value: "2.7GHz" },
          { label: "核心数量", value: "十四核心" },
        ],
      },
    ],
  },
});

function Info() {
  const [info, setInfo] = useRecoilState(infoState);
  return (
    <>
      <ContentTitle>
        <h2
          className={css`
            font-size: 16px;
            margin: unset;
          `}
        >
          {info.name}
        </h2>
      </ContentTitle>
      {info.group.map((g) => (
        <FloatItem>
          <div
            className={css`
              font-weight: bold;
              margin-bottom: 12px;
            `}
          >
            {g.title}
          </div>
          {g.value.map((v) => (
            <div
              className={css`
                display: flex;
                margin-top: 8px;
                font-size: 12px;
              `}
            >
              <div
                className={css`
                  color: #999;
                  width: 100px;
                `}
              >
                {v.label}
              </div>
              <div>{v.value}</div>
            </div>
          ))}
        </FloatItem>
      ))}
    </>
  );
}

export default Info;
