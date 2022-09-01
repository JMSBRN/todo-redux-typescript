import styled from "styled-components";

export const WeatherWrapper = styled.div`
  width: 225px;
  height: auto;
  padding: 3px;
  color: var(--text-color);
  border: 1px solid var(--border-color-grey);
  border-radius: 3px;
  cursor: grab;
`;
export const Input = styled.input`
  width: 100px;
  margin-right: 5px;
  outline: none;
  border: none;
  font-size: 16px;
  color: var(--text-color);
  border-bottom: 1px solid var(--border-color-grey);
`;
export const SetCityBtn = styled.button`
  color: var(--text-color);
  font-size: 16px;
`;
export const City = styled.div`
  color: var(--text-color);
  font-size: 16px;
`;
export const TempWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--text-color);
`;
export const Temp = styled.div`
  font-size: 30px;
  color: var(--text-color);
`;
export const Clouds = styled.img`
  width: 50px;
`;
export const Pressure = styled.div`
  font-size: 18px;
  color: var(--text-color);
`;
export const Humidity = styled.div`
  margin-top: 6px;
  font-size: 20px;
  color: var(--text-color);
`;
export const HmHg = styled.span`
  font-size: 10px;
  color: var(--text-color);
`;
export const Wind = styled.div`
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  font-size: 16px;
  color: var(--text-color);
`;
export const WindDirection = styled.div`
  color: var(--text-color);
`;
export const WindSpeed = styled.div`
  color: var(--text-color);
`;
