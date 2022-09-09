import styled from "styled-components";
import { device } from "../../../utils/mediaUtils";
export const WeatherCityes = styled.div`
  position: absolute;
  width: 300px;
  height: 700px;
  margin-top: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  list-style: none;
  @media ${device.desktopL} {
    position: absolute;
    top: 3%;
    right: 1%;
  }
`;
export const DefaultWeather = styled.div`
position: absolute;
height: 140px;
@media ${device.desktopL} {
  top: 3%;
  left: 1%;
}
@media ${device.desktopXL} {
  top: 80px;
  left: 1700px;
}
`;
export const AddCityBtnWrapper = styled.div`
  height: 30px;
`;
export const AddCityBtn = styled.button`
  margin-bottom: 20px;
  width: 100%;
  padding: 5px;
  font-size: 16px;
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

