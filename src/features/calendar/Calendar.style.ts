import styled from "styled-components";
import { device, deviceFontSize } from "../utils/mediaUtils";

export const Calendar = styled.div`
  position: absolute;
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
  margin-top: 20px;
  width: 300px;
  height: 300px;
  font-size: 10px;
  color: var(--text-color);
  @media ${device.desktop} {
    width: 550px;
    height: 550px;
    top: 0px;
    left: 50px;
    .fc {
      font-size: .9rem;
    }
  }
  @media ${device.desktopL} {
    width: 600px;
    height: 600px;
    top: 0px;
    left: 50px;
    .fc {
      font-size: 1rem;
    }
  }
  @media ${device.desktopXL} {
    width: 1200px;
    height: 600px;
    top: 0px;
    left: 100px;
    .fc {
      font-size: 2rem;
    }
  }
`;
