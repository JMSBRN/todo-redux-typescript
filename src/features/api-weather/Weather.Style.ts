import styled from "styled-components";

export const WeatherWrapper = styled.div`
  width: 200px;
  height: auto;
  padding: 3px;
  font-size: 10px;
  border: 1px solid lightblue;
  border-radius: 3px;
`;
export const Input = styled.input`
  width: 100px;
  margin-right: 5px;
  outline: none;
  border: none;
  font-size: 16px;
  border-bottom: 1px solid grey;
`;
export const SetCityBtn  = styled.button`
font-size: 16px;
`;
export const City = styled.div`
font-size: 16px;
`;
export const TempWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Temp = styled.div`
 font-size: 30px;
`;
export const Clouds = styled.img`
 width: 50px;
`;
export const Pressure = styled.div`
 font-size: 16px;
`;
export const Humidity = styled.div`
 font-size: 16px;
`;
export const HmHg = styled.span`
 font-size: 10px;
`;
export const Wind = styled.div`
 padding: 3px;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 gap: 10px;
 font-size: 16px;
`;
export const WindDirection = styled.div`
`;
export const WindSpeed = styled.div`
`;


