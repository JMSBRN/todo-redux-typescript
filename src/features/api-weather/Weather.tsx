import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getAsyncApiWeather,
  getCityName,
  selectWether,
} from "./apiWeatherSlice";
import * as Styled from "./Weather.Style";

const Weather = () => {
  const { weatherValues, valueCity, error } = useAppSelector(selectWether);
  const dispatch = useAppDispatch();
  const {
    city,
    temp,
    pressure,
    humidity,
    clouds,
    windDeg,
    windSpeed,
  } = weatherValues;
  const handlerSetCity = () => {
    valueCity && localStorage.setItem("city", JSON.stringify(valueCity));
    dispatch(getAsyncApiWeather());
  };
  return (
    <Styled.WeatherWrapper>
      <input
        type="text"
        placeholder={error}
        onChange={(e) => dispatch(getCityName(e.target.value))}
      />
      <button onClick={handlerSetCity}>set new city</button>
      <div> city: {city}</div>
      <div> temp: {temp} °C</div>
      <div> pressure(mmHg) : {pressure}</div>
      <div> humidity : {humidity}%</div>
      <div>clouds: {clouds} </div>
      <ul>
        <li>wind-direction : {windDeg}</li>
        <li>wind speed (km/h) :{windSpeed}</li>
      </ul>
    </Styled.WeatherWrapper>
  );
};

export default Weather;
