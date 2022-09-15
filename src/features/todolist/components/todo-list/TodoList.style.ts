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
  @media ${device.mobileExtraS}, ${device.mobileS}, ${device.mobileM} {
    height: 100%;
    overflow-y: auto;
  }
  `;
export const TodoList = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px 0;
  background-color: rgba(50, 50, 50, 0.4);
  background-blend-mode: color;
  @media ${device.mobileExtraS}, ${device.mobileS}, ${device.mobileM}  {
    height: 100%;
    overflow-y: auto;
  }
`;
export const FormAndTodosWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 1%;
  width: 30%;
  height: 100%;
  @media ${device.mobileExtraS} {
    top: 380px;
    width: 82%;
    margin: 0 9%;
  }
  @media ${device.mobileS} {
    top: 480px;
    width: 82%;
    margin: 0 9%;
  }
  @media ${device.mobileM} {
    top: 500px;
    width: 82%;
    margin: 0 9%;
  }
  @media ${device.mobileLandscape} {
    display: none;
  }
  @media ${device.tabletPortrait} {
    top: 35%;
  }
`;
