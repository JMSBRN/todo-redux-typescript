import styled from "styled-components";
import { device } from "../utils/mediaUtils";

export const Calendar = styled.div`
  position: absolute;
  top: 1%;
  left: 1%;
  width: 28%;
  height: 28%;
  font-size: .6vw;
  color: var(--text-color);
  & .fc-button.fc-today-button,
  .fc-button.fc-prev-button,
  .fc-button.fc-next-button {
    background: transparent;
    color: var(--text-color);
    border: 1px solid var(--border-color);
    &:active {
      background-color: transparent;
    }
    &:focus {
      visibility: hidden;
      transition-delay: 0.1s;
    }
  }
  @media ${device.mobileExtraS}, ${device.mobileS}, ${device.mobileM} {
    position: absolute;
    margin: 0 9%;
    top: 26%;
    width: 82%;
    height: 82%;
    .fc {
      font-size: 3vw;
    }
  }
  @media ${device.mobileLandscape} {
    display: none;
  }
`;
