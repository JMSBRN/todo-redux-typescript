import styled from "styled-components";
import { device, deviceFontSize } from "../utils/mediaUtils";

export const WeatherWrapper = styled.div`
  width: 225px;
  height: auto;
  padding: 5px;
  margin-bottom: 15px;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  cursor: grab;
  @media ${device.desktopL} {
    width: 2.2em;
    font-size: ${deviceFontSize.desktopL};
  }
  @media ${device.desktopXL} {
    width: 500px;
    height: auto;
    font-size: ${deviceFontSize.desktopXL};
    border: none;
  }
`;
export const Input = styled.input`
  width: 100px;
  margin-right: 5px;
  outline: none;
  border: none;
  font-size: .2em;
  color: var(--text-color);
  background-color: transparent;
  border-bottom: 1px solid var(--border-color);
`;
export const InputAndBtnWrapper = styled.div`
  width: 100%;
  height: .35em;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const SetCityBtn = styled.button`
  font-size: .15em;
  color: var(--text-color);
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  cursor: pointer;
  &:active {
    border: 1px solid var(--border-color-grey);
  }
`;
export const City = styled.div`
  color: var(--text-color);
  font-size: .3em;
`;
export const TempWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--text-color);
`;
export const Temp = styled.div`
  font-size: .4em;
  color: var(--text-color);
`;
export const Clouds = styled.img`
  width: 50px;
  @media ${device.desktopL} {
    width: .7em;
  }
  @media ${device.desktopXL} {
    width: .7em;
  }
`;
export const Pressure = styled.div`
  font-size: .2em;
  color: var(--text-color);
`;
export const Humidity = styled.div`
  margin-top: 6px;
  font-size: .2em;
  color: var(--text-color);
`;
export const HmHg = styled.span`
  font-size: 0.7em;
  color: var(--text-color);
`;
export const Wind = styled.div`
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  font-size: .2em;
  color: var(--text-color);
`;
export const WindDirection = styled.div`
  color: var(--text-color);
`;
export const WindSpeed = styled.div`
  color: var(--text-color);
`;
