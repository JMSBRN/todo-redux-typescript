import styled from "styled-components";
interface ITodo {
  complited: boolean;
}
export const TodoWrapper = styled.div`
  position: relative;
  width: 420px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid var(--border-color-grey);
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
    background-color: whitesmoke;
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
