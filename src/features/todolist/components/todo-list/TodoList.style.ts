import styled from "styled-components";
import { device } from "../../../utils/mediaUtils";
import isLandImg from "../todo-list/assets/img/island.jpg";

export const TodoListLayout = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(${isLandImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media ${device.mobileM} {
    position: relative;
    height: 100%;
    overflow: auto;
  }
  `;
export const TodoList = styled.div`
  position: relative;
  width: 100%;
  max-height: 100%;
  display: flex;
  background-color: rgba(50, 50, 50, 0.4);
  background-blend-mode: color;
  @media ${device.mobileM} {
    position: relative;
    height: 100%;
    overflow: auto;
  }
  @media ${device.mobileExtraS} {
    background-color: grey;
  }
  @media ${device.mobileL} {
    background-color: forestgreen;
  }
`;
export const FormAndTodosWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 1%;
  width: 30%;
  height: 100%;
  @media ${device.mobileS} {
    top: 60%;
    width: 82%;
    margin: 0 9%;
  }
  @media ${device.mobileM} {
    top: 35%;
    width: 82%;
    margin: 0 9%;
  }
  @media ${device.tabletPortrait} {
    top: 35%;
  }
`;
export const ToDoListWrapper = styled.div`
  margin: 10px auto;
  width: 100%;
  height: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;
