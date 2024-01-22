/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 개별 게시판 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import {
  FontSize,
  GrayColor,
  MainColor,
  SubColor,
  WhiteColor,
} from "../../../components/CSS/Color/ColorNote";
import {
  betweenRow,
  centerColumn,
} from "../../../components/CSS/Global/GlobalDisplay";
import BoardComment from "./BoardComment";

const BoardContentWrapper = styled.div<{ toggle: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: white;
  position: absolute;
  transform: translate(${(props) => (props.toggle ? "100%" : "0%")});
  opacity: ${(props) => (props.toggle ? "1" : "0")};
  transition: transform 0.8s ease-in-out, opacity 1s ease;

  .boardContentBlock {
    border: 2px solid ${MainColor.Main100};
    width: 90%;
    height: 750px;

    .boardInfo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 6%;
      padding: 0 10px;
      font-size: ${FontSize.large};
      font-weight: bold;
      background-color: ${MainColor.Main100};
      color: ${WhiteColor.White100};
    }

    .scrollBoard {
      width: 100%;
      height: 94%;
      overflow: scroll;
    }

    .boardContent {
      width: 100%;
      height: 450px;
      padding: 20px;
    }

    .boardUpdateDiv {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 50px;
      padding-right: 10px;

      .updateButton {
        width: 30px;
        height: 100%;
        background-color: transparent;
        color: ${MainColor.Main100};
        font-size: ${FontSize.xsmall};
        margin-right: 10px;
      }

      .deleteButton {
        width: 30px;
        height: 100%;
        background-color: transparent;
        font-size: ${FontSize.xsmall};
        color: ${SubColor.Sub200};
      }
    }

    .commentCountDiv {
      ${centerColumn}
      width: 100%;
      height: 50px;
      background-color: ${MainColor.Main200};
      margin-bottom: 8px;
      color: ${GrayColor.Gray100};
      font-size: ${FontSize.medium};
      font-weight: bold;
    }

    .commentDiv {
      ${betweenRow}
      width: 100%;
      height: 50px;
      color: ${MainColor.Main100};
      font-size: ${FontSize.medium};
      font-weight: bold;

      .commentInputDiv {
        ${centerColumn}
        padding-left: 10px;
        width: 83%;
        height: 90%;

        input {
          width: 100%;
          height: 85%;
          border: 2px solid ${MainColor.Main100};
          border-radius: 20px;
        }
      }

      .commentButtonDiv {
        ${centerColumn}
        width:15%;
        height: 70%;

        button {
          width: 100px;
          height: 100%;
          background-color: ${MainColor.Main100};
          border: 1px solid ${MainColor};
          border-radius: 10px;
          color: ${WhiteColor.White100};
        }
      }
    }
  }
`;

interface ContentProps {
  toggle: boolean;
}

const BoardContent: React.FC<ContentProps> = ({ toggle }) => {
  return (
    <BoardContentWrapper toggle={toggle}>
      <div className="boardContentBlock">
        <div className="boardInfo">
          <p>게시판 제목</p>
          <p>글쓴이 || 생성날짜</p>
        </div>
        <div className="scrollBoard">
          <div className="boardContent">게시판 내용 입니다</div>
          <div className="boardUpdateDiv">
            <button className="updateButton">수정</button>
            <button className="deleteButton">삭제</button>
          </div>
          <div className="commentCountDiv">0개의 댓글이 있습니다 ▼</div>
          <div className="commentDiv">
            <div className="commentInputDiv">
              <input />
            </div>
            <div className="commentButtonDiv">
              <button>댓글 등록</button>
            </div>
          </div>
          <BoardComment />
        </div>
      </div>
    </BoardContentWrapper>
  );
};

export default BoardContent;
