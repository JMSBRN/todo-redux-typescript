import styled from "styled-components";
import {
  device,
  deviceFontSize,
} from "../utils/mediaUtils";

export const ClockWrapper = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  gap: 30px;
  @media ${device.desktopL} {
    top: 250px;
    right: 500px;
    font-size: ${deviceFontSize.desktopL};
  }
  @media ${device.desktopXL} {
    top: 3%;
    left: 45%;
    font-size: ${deviceFontSize.desktopXL};
  }
`;
export const Greeting = styled.div`
  font-size: 30px;
  color: var(--text-color);
  @media ${device.desktopL} {
    text-align: center;
    font-size: .7em;
  }
  @media ${device.desktopXL} {
    text-align: center;
    font-size: .5em;
  }
`;
export const GreetingNameWrapper = styled.div`
  width: 70px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${device.desktopL} {
    width: 900px;
    height: 140px;
  }
  @media ${device.desktopXL} {
    width: 1000px;
    height: 270px;
  }
`;
export const GreetingName = styled.div`
  font-size: 30px;
  color: var(--text-color);
  cursor: default;
  @media ${device.desktopL} {
    text-align: center;
    font-size: .5em;
  }
  @media ${device.desktopXL} {
    text-align: center;
    font-size: .5em;
  }
`;
export const InputGreetingNameWrapper = styled.div`
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
    @media ${device.desktopL} {
      font-size: .5em;
    }
    @media ${device.desktopXL} {
      font-size: .5em;
    }
  }
  @media ${device.desktopL} {
    font-size: .5em;
  }
  @media ${device.desktopXL} {
    font-size: .5em;
  }
  :focus {
    outline: none;
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
    font-size: .5em;
  }
  @media ${device.desktopXL} {
    font-size: .5em;
  }
`;
export const HoverMessage = styled.div`
  color: transparent;
  width: 900px;
  cursor: pointer;
  &:hover {
    color: var(--text-color);
    transition-delay: 0.3s;
    transition: 0.3s ease all;
  }
  @media ${ device.desktopL} {
    font-size: .5em;
  }
  @media ${ device.desktopXL} {
    font-size: .5em;
  }
`;
export const Time = styled.div`
  width: 500px;
  font-weight: 600;
  font-size: 65px;
  letter-spacing: 5px;
  color: var(--text-color);
  @media ${device.desktopL} {
    text-align: center;
    font-size: 1em;
  }
  @media ${device.desktopXL} {
    text-align: center;
    font-size: 1em;
  }
`;
export const Seconds = styled.span`
  font-size: 30px;
  color: rgba(250, 250, 250, 0.7);
  @media ${device.desktopL} {
    font-size: .5em;
  }
  @media ${device.desktopXL} {
    font-size: .5em;
  }
`;
export const Date = styled.div`
  color: var(--text-color);
  font-weight: 400;
  font-size: 20px;
  @media ${device.desktopL} {
    text-align: center;
    font-size: .3em;
  }
  @media ${device.desktopXL} {
    text-align: center;
    font-size: .5em;
  }
`;
