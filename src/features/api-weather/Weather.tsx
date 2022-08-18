import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectWether } from "./apiWeatherSlice";
import * as Styled from "./Weather.Style";

const Weather = () => {
  const { weatherValues } = useAppSelector(selectWether);
  const {
    city,
    temp,
    pressure,
    humidity,
    description,
    main,
    windDeg,
    windSpeed,
  } = weatherValues;

  return (
    <Styled.WeatherWrapper>
      <div> city: {city}</div>
      <div> temp: {temp}</div>
      <div> pressure(mmHg) : {pressure}</div>
      <div> humidity : {humidity}%</div>
      <div> description :{description}</div>
      <div> main :{main}</div>
      <ul>
        <li>wind-direction : {windDeg}</li>
        <li>wind speed (km/h) :{windSpeed}</li>
      </ul>
    </Styled.WeatherWrapper>
  );
};

export default Weather;
