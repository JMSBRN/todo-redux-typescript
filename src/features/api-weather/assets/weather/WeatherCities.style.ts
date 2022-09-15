import styled from "styled-components";
import { device, deviceFontSize } from "../../../utils/mediaUtils";

export const DefaultWeather = styled.div`
  position: absolute;
  top: 5%;
  left: 35%;
  width: 8%;
  height: auto;
  font-size: 4vw;
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
    width: 30%;
    height: 30vw;
  }
  @media ${device.mobileLandscape} {
    top: 5%;
    left: 5%;
    width: 20%;
    height: 20%;
  }
`;
export const WeatherCityes = styled.div`
  position: absolute;
  width: 10%;
  height: 70%;
  top: 5%;
  right: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2%;
  font-size: 4vw;
  list-style: none;
`;
export const AddCityBtn = styled.button`
  width: 100%;
  height: 5%;
  font-size: 0.16em;
  margin-bottom: 2%;
  color: var(--text-color);
  background-color: transparent;
  border: 1px solid var(--border-color);
  cursor: pointer;
  &:active {
    border: 1px solid var(--border-color-grey);
  }
  @media ${device.mobileExtraS}, ${device.mobileS},  ${device.mobileM}, ${device.mobileLandscape} {
    display: none;
  }
`;
export const NoCityMessage = styled.div`
  width: 70%;
  height: 70%;
  padding: 1%;
  font-size: 1rem;
  color: var(--text-color);
  @media ${device.mobileM}, ${device.mobileS}, ${device.mobileExtraS} {
    font-size: .7rem;
  }
`;
