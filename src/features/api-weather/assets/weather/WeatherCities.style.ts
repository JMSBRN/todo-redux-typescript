import styled from "styled-components";
import { device, deviceFontSize } from "../../../utils/mediaUtils";

export const DefaultWeather = styled.div`
  position: absolute;
  top: 5%;
  left: 35%;
  width: 8%;
  height: auto;
  
  @media ${device.mobileExtraS} {
    top: 3%;
    left: 5%;
    width: 100px;
    height: 80px;
    font-size: ${deviceFontSize.mobileExtraS};
  }
  @media ${device.mobileS} {
    top: 3%;
    left: 5%;
    width: 100px;
    height: 110px;
    font-size: ${deviceFontSize.mobileS};
  }
  @media ${device.mobileM} {
    top: 3%;
    left: 5%;
    width: 100px;
    height: 110px;
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
export const WeatherCityes = styled.div`
  position: absolute;
  width: 10%;
  top: 5%;
  right: 4%;
  display: flex;
  flex-direction: column;
  list-style: none;
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
export const AddCityBtn = styled.button`
  width: 85%;
  height: 4em;
  font-size: 0.16em;
  margin-bottom: 20px;
  color: var(--text-color);
  background-color: transparent;
  border: 1px solid var(--border-color);
  cursor: pointer;
  &:active {
    border: 1px solid var(--border-color-grey);
  }
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
export const WeatherWrapper = styled.div`
`;
export const NoCityMessage = styled.div`
  width: 70%;
  height: 70%;
  padding: 3px;
  font-size: 1rem;
  color: var(--text-color);
  @media ${device.mobileM}, ${device.mobileS}, ${device.mobileExtraS} {
    font-size: .7rem;
  }
`;
