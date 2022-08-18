import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectWether } from "./apiWeatherSlice";
import * as Styled from "./Weather.Style";

const Weather = () => {
  const { weatherValues } = useAppSelector(selectWether);
  const {
    city,
    temp,
    feelsLike,
    tempMin,
    tempMax,
    pressure,
    humidity,
    seaLevel,
    grndLevel,
  } = weatherValues;
  return (
    <Styled.WeatherWrapper>
      <div> city: {city}</div>
      <div> temp: {temp}</div>
      <div> feelsLike: {feelsLike}</div>
      <div> tempMin: {tempMin}</div>
      <div> tempMax : {tempMax}</div>
      <div> pressure : {pressure}</div>
      <div> humidity : {humidity}</div>
      <div> seaLevel: {seaLevel}</div>
      <div> grndLevel :{grndLevel}</div>
    </Styled.WeatherWrapper>
  );
};

export default Weather;
