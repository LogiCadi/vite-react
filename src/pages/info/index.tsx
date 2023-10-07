import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { atom, useRecoilState } from "recoil";
import produce from "immer";

/** 通用 标题栏 */
export const ContentTitle = styled.div`
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
export const Link = styled.a`
  color: #006eff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const infoState = atom({
  key: "infoState",
  default: {
    name: "德华",
    group: [
      {
        title: "基本信息",
        value: [
          { label: "适用类型", value: "笔记本" },
          { label: "CPU系列", value: "酷睿i7 12代系列酷睿i7 12代系列酷睿i7 12代系列酷睿i7 12代系列酷睿i7 12代系列" },
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

export const editState = atom({
  key: "editState",
  default: false,
});

function Info() {
  const [info, setInfo] = useRecoilState(infoState);
  const [edit, setEdit] = useRecoilState(editState);

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
          {info.name}
        </h2>
        <Link onClick={() => setEdit(!edit)}>{edit ? "保存" : "编辑"}</Link>
      </ContentTitle>
      {info.group.map((g, gi) => (
        <FloatItem>
          <div
            className={css`
              font-weight: bold;
            `}
          >
            {g.title}
          </div>
          {g.value.map((v, vi) => (
            <div
              className={css`
                display: flex;
                margin-top: 12px;
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
              <div
                className={css`
                  flex: 1;
                `}
              >
                {edit ? (
                  <textarea
                    value={v.value}
                    onChange={(e) =>
                      setInfo((prev) =>
                        produce(prev, (draft) => {
                          draft.group[gi].value[vi].value = e.target.value;
                        })
                      )
                    }
                  />
                ) : (
                  v.value
                )}
              </div>
            </div>
          ))}
        </FloatItem>
      ))}
    </>
  );
}

export default Info;
