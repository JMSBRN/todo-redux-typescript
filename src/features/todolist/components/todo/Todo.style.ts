import styled from "styled-components";
interface ITodo {
  complited: boolean;
}
export const TodoWrapper = styled.div`
  min-width: 300px;
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  border: 1px solid grey;
`
export const Todo = styled.div<ITodo>`
  text-decoration: ${({complited}) => complited ? 'line-through red' : ''};
`
export const TodoBtn = styled.button`

`