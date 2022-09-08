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
`;
export const TodoList = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(50, 50, 50, 0.4);
  background-blend-mode: color;
  @media ${device.mobileExtraS} {
    background-color: rgba(50, 50, 50, 0.9);
  }
  @media ${device.mobileS} {
    background-color: grey;
  }
  @media ${device.mobileM} {
    background-color: hotpink;
  }
  @media ${device.mobileL} {
    background-color: forestgreen;
  }
  @media ${device.tablet} {
    background-color: black;
  }
  @media ${device.laptop} {
    background-color: yellow;
  }
  @media ${device.laptopL} {
    background-color: green;
  }
  @media ${device.desktop} {
    background-color: blue;
  }
  @media ${device.desktopL} {
    background-color: red;
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
