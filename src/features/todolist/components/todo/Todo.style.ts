import styled from "styled-components";
interface ITodo {
  complited: boolean;
}
export const Todo = styled.div<ITodo>`
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid grey;
  text-decoration: ${({complited}) => complited ? 'line-through ' : ''};
`