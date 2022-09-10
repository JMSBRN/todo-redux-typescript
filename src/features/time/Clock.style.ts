import styled from "styled-components";
import { device, deviceFontSize } from "../utils/mediaUtils";

export const ClockWrapper = styled.div`
  position: absolute;
  top: 20%;
  right: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  height: 50%;
  gap: 30px;
  @media ${device.desktop} {
    font-size: ${deviceFontSize.desktop};
  }
  @media ${device.desktopL} {
    font-size: ${deviceFontSize.desktopL};
  }
  @media ${device.desktopXL} {
    font-size: ${deviceFontSize.desktopXL};
  }
`;
export const Greeting = styled.div`
  font-size: 0.7em;
  text-align: center;
  color: var(--text-color);
  @media ${device.desktopXL} {
    font-size: 0.5em;
  }
`;
export const GreetingName = styled.div`
  text-align: center;
  font-size: 0.5em;
  color: var(--text-color);
  cursor: default;
`;
export const InputGreetingNameWrapper = styled.div`
  position: relative;
  @media ${device.desktopL} {
    font-size: ${deviceFontSize.desktopL};
  }
  @media ${device.desktopXL} {
    font-size: ${deviceFontSize.desktopXL};
  }
`;
export const InputNameByDefault = styled.input`
  position: absolute;
  top: 0;
  width: 40%;
  font-size: 0.2em;
  color: var(--text-color);
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--border-color);
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 1em;
    color: var(--text-color);
  }
  :focus {
    outline: none;
  }
`;
export const InputCityByDefault = styled.input`
  position: absolute;
  top: 30%;
  width: 40%;
  font-size: 0.2em;
  color: var(--text-color);
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--border-color);
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 1em;
    color: var(--text-color);
  }
  :focus {
    outline: none;
  }
`;
export const SubmitBtn = styled.button`
  width: 20%;
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
    font-size: 0.2em;
  }
  @media ${device.desktopXL} {
    font-size: 0.2em;
  }
`;
export const HoverMessage = styled.div`
  color: transparent;
  width: 100%;
  cursor: pointer;
  &:hover {
    color: var(--text-color);
    transition-delay: 0.3s;
    transition: 0.3s ease all;
  }
  @media ${device.desktopL} {
    font-size: 0.5em;
  }
  @media ${device.desktopXL} {
    font-size: 0.5em;
  }
`;
export const Time = styled.div`
  width: 500px;
  font-weight: 600;
  text-align: center;
  font-size: 1em;
  letter-spacing: 5px;
  color: var(--text-color);
`;
export const Seconds = styled.span`
  font-size: 0.5em;
  color: rgba(250, 250, 250, 0.7);
`;
export const Date = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 0.3em;
  color: var(--text-color);
  @media ${device.desktopXL} {
    font-size: 0.5em;
  }
`;
