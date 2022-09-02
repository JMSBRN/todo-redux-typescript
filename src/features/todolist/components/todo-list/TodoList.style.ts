import styled from "styled-components";
import isLandImg from '../todo-list/assets/img/island.jpg';

export const TodoListLayout = styled.div`
   position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(${isLandImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  `;
export const TodoList = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(100,100,100,0.3);
  background-blend-mode: color;
`;
export const ToListWrapper = styled.div`
  margin: 10px auto;
  width: 100%;
  height: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;
