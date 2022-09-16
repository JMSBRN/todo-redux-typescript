import styled from "styled-components";
import { device } from "../utils/mediaUtils";

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
  font-size: 5vw;
  @media ${device.mobileExtraS},
    ${device.mobileS},
    ${device.mobileM}, ${device.mobileL}
     {
    top: 3%;
    right: 9%;
    width: 40%;
    height: 40vw;
    font-size: 16vw;
  }
  @media ${device.mobileL} {
    top: 3%;
    right: 9%;
    width: 40%;
    height: 40vw;
    font-size: 12vw;
  }
  @media ${device.mobileLandscape} {
    position: relative;
    top: 10%;
    left: 40%;
    width: 50%;
    height:  70%;
    font-size: 2vw;
  }
`;
export const Greeting = styled.div`
  font-size: 2vw;
  text-align: center;
  color: var(--text-color);
  @media ${device.mobileExtraS}, ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    position: absolute;
    right: 9%;
    font-size: 0.3em;
  }
  @media ${device.mobileLandscape} {
    font-size: 2em;
  }
`;
export const GreetingName = styled.div`
  text-align: center;
  color: var(--text-color);
  cursor: default;
  @media ${device.mobileExtraS},
    ${device.mobileS},
    ${device.mobileM},
    ${device.mobileL} {
    text-align: right;
    margin-top: 13%;
    font-size: 7vw;
  }
  @media ${device.mobileLandscape} {
    font-size: 2em;
  }
`;
export const InputGreetingNameWrapper = styled.div`
  position: relative;
  width: 30%;
  height: auto;
  font-size: 4vw;
  @media ${device.mobileExtraS}, ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    position: absolute;
    width: 100%;
    top: 3%;
    right: 3%;
    font-size: 23vw;
    background-color: rgba(100, 100, 100, 0.8);
    z-index: 1;
  }
  @media ${device.mobileLandscape} {
    position: absolute;
    width: 60%;
    top: 3%;
    right: 8%;
    font-size: 8vw;
    background-color: rgba(100, 100, 100, 0.8);
    z-index: 1;
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
  padding: 0 0.05em;
  font-size: 0.2em;
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
export const SettingsBtn = styled.button`
  position: absolute;
  right: 10%;
  bottom: 10%;
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:active {
    border: 1px solid var(--border-color);
    border-color: var(--border-color);
  }
`;
export const SettingsImg = styled.img`
  width: 2em;
  filter: invert(100%) sepia(100%) saturate(13%) hue-rotate(253deg)
  brightness(102%) contrast(100%);
`;
export const HoverMessage = styled.div`
  color: transparent;
  width: 100%;
  font-size: 2vw;
  cursor: pointer;
  &:hover {
    color: var(--text-color);
    transition-delay: 0.3s;
    transition: 0.3s ease all;
  }
`;
export const Time = styled.div`
  width: 35%;
  font-weight: 600;
  text-align: center;
  color: var(--text-color);
  font-size: 9vw;
  @media ${device.mobileExtraS}, ${device.mobileS}, ${device.mobileM} {
    position: absolute;
    top: 45%;
    width: 100%;
    font-size: 12vw;
  }
  @media ${device.mobileLandscape} {
    font-size: 9vw;
  }
`;
export const Seconds = styled.span`
  font-size: 0.5em;
  color: rgba(250, 250, 250, 0.7);
  @media ${device.mobileExtraS}, ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    display: none;
  }
  @media ${device.mobileLandscape} {
    font-size: 2vw;
  }
`;
export const Date = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 2vw;
  color: var(--text-color);
  @media ${device.mobileExtraS}, ${device.mobileS}, ${device.mobileM} {
    display: none;
  }
`;
