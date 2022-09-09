import styled from "styled-components";
import {
  device,
  deviceDefaultFontSize,
  deviceDefaultZeroPointFiveFontSize,
  deviceExtraLargeFontSize,
  deviceLargeFontSize,
  deviceMediumFontSize,
  deviceSmallFontSize,
} from "../utils/mediaUtils";

export const ClockWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  @media ${device.desktopL} {
    position: absolute;
    top: 3%;
    left: 45%;
  }
  @media ${device.desktopXL} {
    position: absolute;
    top: 3%;
    left: 45%;
  }
`;
export const Greeting = styled.div`
  font-size: 30px;
  color: var(--text-color);
  @media ${device.desktopL} {
    text-align: center;
    font-size: ${deviceLargeFontSize.desktopL};
  }
  @media ${device.desktopXL} {
    text-align: center;
    font-size: ${deviceLargeFontSize.desktopXL};
  }
`;
export const GreetingNameWrapper = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const GreetingName = styled.span`
  font-size: 30px;
  color: var(--text-color);
  cursor: default;
  @media ${device.desktopL} {
    text-align: center;
    font-size: ${deviceLargeFontSize.desktopL};
  }
  @media ${device.desktopXL} {
    text-align: center;
    font-size: ${deviceLargeFontSize.desktopXL};
  }
`;
export const InputGreetingNameWrapper = styled.div``;
export const InputCityByDefault = styled.input`
  color: var(--text-color);
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--border-color);
  font-size: 20px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 12px;
    color: var(--text-color);
    @media ${device.desktopL} {
      font-size: ${deviceSmallFontSize.desktopL};
    }
    @media ${device.desktopXL} {
      font-size: ${deviceSmallFontSize.desktopXL};
    }
  }
  @media ${device.desktopXL} {
    font-size: ${deviceSmallFontSize.desktopXL};
  }
  :focus {
    outline: none;
  }
  @media ${device.desktopL} {
    font-size: ${deviceMediumFontSize.desktopL};
  }
`;
export const SubmitBtn = styled.button`
  margin: 3%;
  width: auto;
  padding: 5px;
  font-size: 20px;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  background-color: transparent;
  cursor: pointer;
  &:active {
    border: 1px solid var(--border-color-grey);
  }
  @media ${device.desktopL} {
    font-size: ${deviceSmallFontSize.desktopL};
  }
  @media ${device.desktopXL} {
    padding: 0 20px;
    font-size: ${deviceSmallFontSize.desktopXL};
  }
`;
export const HoverMessage = styled.div`
  color: transparent;
  font-size: 12px;
  &:hover {
    color: var(--text-color);
    transition-delay: 0.3s;
    transition: 0.3s ease all;
  }
`;
export const TimeWrapper = styled.div`
  width: 200px;
  height: 100px;
  @media ${device.desktopL} {
    width: 600px;
    height: 200px;
  }
`;
export const Time = styled.div`
  width: auto;
  height: auto;
  padding: 10px;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 65px;
  letter-spacing: 5px;
  color: var(--text-color);
  @media ${device.desktopL} {
    width: auto;
    height: auto;
    padding-left: 80px;
    font-size: ${deviceExtraLargeFontSize.desktopL};
  }
  @media ${device.desktopXL} {
    text-align: center;
    font-size: ${deviceExtraLargeFontSize.desktopXL};
  }
`;
export const Seconds = styled.span`
  font-size: 30px;
  color: rgba(250, 250, 250, 0.7);
  @media ${device.desktopXL} {
   font-size: ${deviceSmallFontSize.desktopXL};
  }
`;

export const Date = styled.div`
  color: var(--text-color);
  font-weight: 400;
  font-size: 20px;
  @media ${device.desktopL} {
    margin-top: 100px;
    text-align: center;
    font-size: ${deviceMediumFontSize.desktopL};
  }
  @media ${device.desktopXL} {
    margin-top: 700px;
    text-align: center;
    font-size: ${deviceMediumFontSize.desktopXL};
  }
`;
