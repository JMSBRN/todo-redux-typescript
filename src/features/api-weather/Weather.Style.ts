import styled from "styled-components";
import { device, deviceDeafaultZeroPointFiveFontSize, deviceDefaultZeroPointFiveFontSize, deviceMediumFontSize, deviceSmallFontSize } from "../utils/mediaUtils";

export const WeatherWrapper = styled.div`
  width: 225px;
  height: auto;
  padding: 5px;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  cursor: grab;
  @media ${device.desktopXL} {
    width: 500px;
    height: auto;
    font-size: ${deviceDefaultZeroPointFiveFontSize.desktopXL};
    border: none;
  }
`;
export const Input = styled.input`
  width: 100px;
  margin-right: 5px;
  outline: none;
  border: none;
  font-size: 16px;
  color: var(--text-color);
  background-color: transparent;
  border-bottom: 1px solid var(--border-color);
`;
export const InputAndBtnWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const SetCityBtnWrapper = styled.div`
  width: 80px;
  margin-left: 10px;
  padding-top: 10px;
`;
export const SetCityBtn = styled.button`
  font-size: 16px;
  color: var(--text-color);
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  cursor: pointer;
  &:active {
    border: 2px solid var(--border-color);
  }
`;
export const City = styled.div`
  color: var(--text-color);
  font-size: 2em;
`;
export const TempWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--text-color);
`;
export const Temp = styled.div`
  font-size: 4em;
  color: var(--text-color);
`;
export const Clouds = styled.img`
  width: 50px;
`;
export const Pressure = styled.div`
  font-size: 2em;
  color: var(--text-color);
`;
export const Humidity = styled.div`
  margin-top: 6px;
  font-size: 2em;
  color: var(--text-color);
`;
export const HmHg = styled.span`
  font-size: 0.6em;
  color: var(--text-color);
`;
export const Wind = styled.div`
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  font-size: 2em;
  color: var(--text-color);
`;
export const WindDirection = styled.div`
  color: var(--text-color);
`;
export const WindSpeed = styled.div`
  color: var(--text-color);
`;
