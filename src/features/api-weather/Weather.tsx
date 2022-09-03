import React, { useState } from "react";
import { IWeatherValues } from "./apiWeatherSlice";
import * as Styled from "./Weather.style";
import cloudImg from "../api-weather/assets/weather/cloud.png";
import cloudSunImg from "../api-weather/assets/weather/sun_clouds.png";
import sunImg from "../api-weather/assets/weather/sun.png";
import { getWeather } from "./api";
interface IWeather{
  cityFromPorps?: string;
}
const Weather = ({cityFromPorps}: IWeather) => {
  const [cityFromInput, setCityFromInput] = useState("");
  const [weatherValues, setWeatherValues] = useState({} as IWeatherValues);
  const [isEntered, setIsEntered] = useState(true)
  const getAsyncWeather = async () => {
    const curWeatheValues =  await getWeather(cityFromInput || cityFromPorps!) as IWeatherValues;
    setWeatherValues(curWeatheValues);
  }
  const handlerSetCity = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if(cityFromInput) {
      getAsyncWeather();
      setCityFromInput('');
      setTimeout(() => {
        setIsEntered(false);
      }, 3000);
    }
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
  const { city, temp, pressure, humidity, clouds, windDeg, windSpeed } =
    weatherValues;
  setCloudImg(clouds);
  return (
    <Styled.WeatherWrapper>
      { isEntered &&
      <Styled.InputAndBtnWrapper>
        <Styled.Input
          type="text"
          placeholder={""}
          value={cityFromInput}
          onChange={(e) => setCityFromInput(e.target.value)}
        />
        <Styled.SetCityBtnWrapper>
          <Styled.SetCityBtn onClick={(e) => handlerSetCity(e)}>set city</Styled.SetCityBtn >
        </Styled.SetCityBtnWrapper>
      </Styled.InputAndBtnWrapper>
      }
      <Styled.City>{city}</Styled.City>
      <Styled.TempWrapper>
      <Styled.Temp>{temp} °C</Styled.Temp>
        <Styled.Clouds src={img} alt={clouds} width="20" />
      </Styled.TempWrapper>
      <Styled.Pressure>⬇️ {pressure} <Styled.HmHg>mmHg</Styled.HmHg></Styled.Pressure>
      <Styled.Humidity>💧 {humidity}%</Styled.Humidity>
      <Styled.Wind>
        <Styled.WindDirection>{windDeg}</Styled.WindDirection>
        <Styled.WindSpeed>{windSpeed} km/h</Styled.WindSpeed>
      </Styled.Wind>
    </Styled.WeatherWrapper>
  );
};

export default Weather;
