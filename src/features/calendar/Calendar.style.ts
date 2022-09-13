import styled from "styled-components";
import { device, deviceFontSize } from "../utils/mediaUtils";

export const Calendar = styled.div`
  position: absolute;
  top: 1%;
  left: 1%;
  width: 28%;
  height: 28%;
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
  @media ${device.mobileS} {
    position: absolute;
    margin: 0 9%;
    top: 22%;
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
    top: 15%;
    width: 82%;
    height: 82%;
    font-size: ${deviceFontSize.mobileM};
    .fc {
      font-size: 0.141em;
    }
  }
  @media ${device.tablet} {
    font-size: ${deviceFontSize.tablet};
    .fc {
      font-size: 0.141em;
    }
  }
  @media ${device.laptop} {
    font-size: ${deviceFontSize.laptop};
    .fc {
      font-size: 0.141em;
    }
  }
  @media ${device.laptopL} {
    font-size: ${deviceFontSize.laptopL};
    .fc {
      font-size: 0.141em;
    }
  }
  @media ${device.desktop} {
    font-size: ${deviceFontSize.desktop};
    .fc {
      font-size: 0.141em;
    }
  }
  @media ${device.desktopL} {
    font-size: ${deviceFontSize.desktopL};
    .fc {
      font-size: 0.141em;
    }
  }
  @media ${device.desktopXL} {
    font-size: ${deviceFontSize.desktopXL};
    .fc {
      font-size: 0.141em;
    }
  }
`;
