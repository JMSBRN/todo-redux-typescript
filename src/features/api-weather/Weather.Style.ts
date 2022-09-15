import styled from "styled-components";
import { device } from "../utils/mediaUtils";

export const WeatherWrapper = styled.div`
  width: 100%;
  height:100%;
  padding: 2%;
  font-size: 4vw;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  cursor: grab;
  @media ${device.mobileExtraS}, ${device.mobileS},${device.mobileM}, ${device.mobileL} {
    font-size: 14vw;
    border: none;
    cursor: none;
  }
  @media ${device.mobileLandscape} {
    font-size: 11vw;
    border: none;
    cursor: none;
  }
`;
export const InputAndBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Input = styled.input`
  width: 50%;
  outline: none;
  border: none;
  font-size: 0.2em;
  color: var(--text-color);
  background-color: transparent;
  border-bottom: 1px solid var(--border-color);
`;
export const SetCityBtn = styled.button`
  width: 38%;
  font-size: 0.18em;
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
  font-size: 0.2em;
`;
export const TempWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--text-color);
`;
export const Temp = styled.div`
  font-size: 0.4em;
  color: var(--text-color);
`;
export const Clouds = styled.img`
  width: 20%;
`;
export const Pressure = styled.div`
  font-size: 0.2em;
  color: var(--text-color);
`;
export const Humidity = styled.div`
  margin-top: 4%;
  font-size: 0.2em;
  color: var(--text-color);
`;
export const HmHg = styled.span`
  font-size: 0.7em;
  color: var(--text-color);
`;
export const Wind = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10%;
  font-size: 0.2em;
  color: var(--text-color);
`;
export const WindDirection = styled.div`
  color: var(--text-color);
`;
export const WindSpeed = styled.div`
  color: var(--text-color);
`;
