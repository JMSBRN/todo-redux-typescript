import styled from "styled-components";
import { device, deviceFontSize } from "../utils/mediaUtils";

export const ClockWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  @media ${device.desktopL} {
    font-size: ${deviceFontSize.desktopL};
  }
`;
export const Greeting = styled.div`
  font-size: 30px;
  color: var(--text-color);
  @media ${device.desktopL} {
    text-align: center;
    font-size: ${deviceFontSize.desktopL};
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
    font-size: ${deviceFontSize.desktopL};
  }
`;
export const InputGreetingNameWrapper = styled.div`
  font-size: 30px;
`;
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
  }
  :focus {
    outline: none;
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
    font-size: 12rem;
  }
`;
export const Time = styled.div`
  width: 200px;
  height: 60px;
  padding: 10px;
  font-weight: 600;
  font-size: 65px;
  letter-spacing: 5px;
  color: var(--text-color);
  @media ${device.desktopL} {
    width: auto;
    height: auto;
    padding-left: 80px;
    font-size: 12rem;
  }
`;
export const Seconds = styled.span`
  font-size: 30px;
  color: rgba(250, 250, 250, 0.7);
`;

export const Date = styled.div`
  color: var(--text-color);
  font-weight: 400;
  font-size: 20px;
  @media ${device.desktopL} {
    text-align: center;
    font-size: ${deviceFontSize.desktopL};
  }
`;
