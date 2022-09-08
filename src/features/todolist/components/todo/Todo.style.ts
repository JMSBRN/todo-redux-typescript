import styled from "styled-components";
interface ITodo {
  complited: boolean;
}
export const TodoWrapper = styled.div`
  position: relative;
  width: 420px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid var(--border-color);
  border-radius: 3px;
`;
export const TimeTodo = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  font-size: 10px;
  color: gray;
`;
export const Todo = styled.div<ITodo>`
  height: auto;
  text-decoration: ${({ complited }) => (complited ? "line-through red" : "")};
`;
export const BtnsWrapper = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
export const TodoBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  background-position: center;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:active {
    border: 1px solid var(--border-color);
    border-radius: 50%;
  }
`;
export const TodoText = styled.div`
  padding: 10px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  font-size: 20px;
  color: var(--text-color);
  line-height: 16px; /* fallback */
  max-height: auto; /* fallback */
  -webkit-line-clamp: 10; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
export const TrashImg = styled.img`
  width: 14px;
  filter: invert(100%) sepia(100%) saturate(13%) hue-rotate(253deg) brightness(102%) contrast(100%);
`;
export const EditImg = styled.img`
  width: 16px;
  filter: invert(100%) sepia(100%) saturate(13%) hue-rotate(253deg) brightness(102%) contrast(100%);
`;
