import styled from "styled-components";
interface ITodo {
  complited: boolean;
}
export const TodoWrapper = styled.div`
  max-width: 300px;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  border: 1px solid grey;
`;
export const Todo = styled.div<ITodo>`
  height: auto;
  text-decoration: ${({ complited }) => (complited ? "line-through red" : "")};
`;
export const TodoBtn = styled.button``;
export const TodoText = styled.div`
  padding: 10px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  font-size: 14px;
  line-height: 16px; /* fallback */
  max-height: auto; /* fallback */
  -webkit-line-clamp: 10; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
