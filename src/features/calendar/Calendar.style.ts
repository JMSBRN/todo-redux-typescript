import styled from "styled-components";
import { device, deviceFontSize } from "../utils/mediaUtils";

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
  @media ${device.mobileExtraS} {
    position: absolute;
    margin: 0 9%;
    top: 150px;
    width: 82%;
    height: 82%;
    font-size: ${deviceFontSize.mobileExtraS};
    .fc {
      font-size: 0.141em;
    }
  }
  @media ${device.mobileS} {
    position: absolute;
    margin: 0 9%;
    top: 180px;
    width: 82%;
    height: 82%;
    font-size: ${deviceFontSize.mobileS};
    .fc {
      font-size: 0.141em;
    }
  }
  @media ${device.mobileM} {
    position: absolute;
    margin: 0 9%;
    top: 170px;
    width: 82%;
    height: 82%;
    font-size: ${deviceFontSize.mobileM};
    .fc {
      font-size: 0.141em;
    }
  }
  @media ${device.mobileLandscape} {
    display: none;
  }
`;
