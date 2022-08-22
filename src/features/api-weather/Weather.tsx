import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getAsyncApiWeather,
  getCityName,
  getId,
  IWeatherValues,
  selectWether,
} from "./apiWeatherSlice";
import * as Styled from "./Weather.Style";
import cloudImg from "../api-weather/assets/wether/cloud.png";
import cloudSunImg from "../api-weather/assets/wether/sun_clouds.png";
import sunImg from "../api-weather/assets/wether/sun.png";
interface IWeatherProps {
  weatherValues: IWeatherValues;
  valueCity: string;
}
const Weather = ({ weatherValues, valueCity }: IWeatherProps) => {
  const { error } = useAppSelector(selectWether);
  const dispatch = useAppDispatch();
  const { id, city, temp, pressure, humidity, clouds, windDeg, windSpeed } =
    weatherValues;
  const handlerSetCity = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(getId(e.currentTarget.id));
    valueCity && localStorage.setItem("city", JSON.stringify(valueCity));
    dispatch(getAsyncApiWeather());
  };
  let img = "";
  const setCloudImg = (clouds: string) => {
    switch (clouds) {
      case "cloud":
        img = cloudImg;
        return;
      case "cloud-sun":
        img = cloudSunImg;
        return;
      case "sun":
        img = sunImg;
        return;
    }
    return img;
  };
  setCloudImg(clouds);
  return (
    <Styled.WeatherWrapper>
      <input
        type="text"
        placeholder={error}
        onChange={(e) => dispatch(getCityName(e.target.value))}
      />
      <button id={id} onClick={(e) => handlerSetCity(e)}>
        set new city
      </button>
      <div> city: {city}</div>
      <div> temp: {temp} °C</div>
      <div> pressure(mmHg) : {pressure}</div>
      <div> humidity : {humidity}%</div>
      <div className="">
        <img src={img} alt={clouds} width="20" />
      </div>
      <ul>
        <li>wind-direction : {windDeg}</li>
        <li>wind speed (km/h) :{windSpeed}</li>
      </ul>
    </Styled.WeatherWrapper>
  );
};

export default Weather;
