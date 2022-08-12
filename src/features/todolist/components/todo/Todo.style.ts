import styled from "styled-components";
interface ITodo {
  complited: boolean;
}
export const TodoWrapper = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid grey;
`
export const Todo = styled.div<ITodo>`
  text-decoration: ${({complited}) => complited ? 'line-through red' : ''};
`