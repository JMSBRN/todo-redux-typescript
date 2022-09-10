import styled from "styled-components";
import { device, deviceFontSize } from "../../../utils/mediaUtils";

export const DefaultWeather = styled.div`
position: absolute;
height: auto;
@media ${device.desktopL} {
  top: 80px;
  left: 850px;
}
@media ${device.desktopXL} {
  top: 80px;
  left: 1700px;
}
`;
export const WeatherCityes = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 1000px;
  list-style: none;
  @media ${device.desktopL} {
    position: absolute;
    top: 80px;
    right: 100px;
    font-size: ${deviceFontSize.desktopL} ;
  }
`;
export const AddCityBtnWrapper = styled.div`
  height: 30px;
  margin-bottom: 40px ;
`;
export const AddCityBtn = styled.button`
  position: absolute;
  top:0;
  width: 100%;
  padding: 5px;
  font-size: .18em;
  color: var(--text-color);
  background-color: transparent;
  border: 1px solid var(--border-color);
  cursor: pointer;
  &:active {
    border: 1px solid var(--border-color-grey);
  }
  @media ${device.desktopXL} {
    display: none;
  }
`;
export const NoCityMessage = styled.div`
  width: 200px ;
  padding: 3px ;
  font-size: 14px;
  color: var(--text-color);
`;

