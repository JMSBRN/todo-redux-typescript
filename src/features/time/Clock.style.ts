import styled from "styled-components";
import { device, deviceFontSize } from "../utils/mediaUtils";

export const ClockWrapper = styled.div`
  position: absolute;
  width: 30%;
  height: 50%;
  top: 10%;
  right: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media ${device.mobileExtraS} {
    position: relative;
    top: 1%;
    right: 2%;
    width: 100%;
    height: 8%;
    font-size: ${deviceFontSize.mobileExtraS};
  }
  @media ${device.mobileS} {
    position: relative;
    top: 1%;
    right: 2%;
    width: 100%;
    height: 8%;
    font-size: ${deviceFontSize.mobileS};
  }
  @media ${device.mobileM} {
    position: relative;
    top: 1%;
    right: 2%;
    width: 100%;
    height: 10% ;
    font-size: ${deviceFontSize.mobileM};
  }
  @media ${device.tablet} {
    font-size: ${deviceFontSize.tablet};
  }
  @media ${device.laptop} {
    font-size: ${deviceFontSize.laptop};
  }
  @media ${device.laptopL} {
    font-size: ${deviceFontSize.laptopL};
  }
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
  @media ${device.mobileExtraS} {
    position: absolute;
    right: 1%;
    font-size: 0.3em;
  }
  @media ${device.mobileS} {
    position: absolute;
    right: 1%;
    font-size: 0.3em;
  }
  @media ${device.mobileM} {
    position: absolute;
    right: 8%;
    font-size: 0.3em;
  }
  @media ${device.desktopXL} {
    font-size: 0.5em;
  }
`;
export const GreetingName = styled.div`
  text-align: center;
  font-size: 0.5em;
  color: var(--text-color);
  cursor: default;
  @media ${device.mobileExtraS} {
    position: absolute;
    width: 33%;
    height: 30%;
    top: 22%;
    right: 1%;
    font-size: 0.4em;
    z-index: 1;
  }
  @media ${device.mobileS} {
    position: absolute;
    width: 33%;
    height: 30%;
    top: 22%;
    right: 1%;
    font-size: 0.4em;
    z-index: 1;
  }
  @media ${device.mobileM} {
    position: absolute;
    top: 15%;
    right: 1%;
    font-size: 0.4em;
    z-index: 1;
  }
`;
export const InputGreetingNameWrapper = styled.div`
  position: relative;
  width: 30%;
  height: auto;
  @media ${device.mobileS} {
    position: absolute;
    width:33%;
    top: 3%;
    right: 2%;
    font-size: ${deviceFontSize.mobileS};
    background-color: rgba(100,100,100,0.8);
    z-index: 1;
  }
  @media ${device.mobileM} {
    position: absolute;
    width:33%;
    top: 3%;
    right: 2%;
    font-size: ${deviceFontSize.mobileM};
    background-color: rgba(100,100,100,0.8);
    z-index: 1;
  }
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
  width: 95%;
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
  width: 95%;
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
  width: 40%;
  height: auto;
  padding: 0 .05em ;
  font-size: .2em;
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
  width: 35%;
  font-weight: 600;
  text-align: center;
  font-size: 1em;
  letter-spacing: 5px;
  color: var(--text-color);
  @media ${device.mobileExtraS} {
    position: absolute;
    top: 51%;
    right: 3%;
    font-size: .5em;
  }
  @media ${device.mobileS} {
    position: absolute;
    top: 60%;
    right: 3%;
    font-size: .5em;
  }
  @media ${device.mobileM} {
    position: absolute;
    top: 45%;
    right: 7.5%;
    font-size: .6em;
  }
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
  @media ${device.mobileExtraS} {
      display: none;
  }
  @media ${device.mobileS} {
      display: none;
  }
  @media ${device.mobileM} {
      display: none;
  }
`;
