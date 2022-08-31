import React, { useState } from "react";
import { IWeatherValues } from "./apiWeatherSlice";
import * as Styled from "./Weather.style";
import cloudImg from "../api-weather/assets/weather/cloud.png";
import cloudSunImg from "../api-weather/assets/weather/sun_clouds.png";
import sunImg from "../api-weather/assets/weather/sun.png";

const Weather = () => {
  const [cityFromInput, setCityFromInput] = useState("");
  const [weatherValues, setWeatherValues] = useState({} as IWeatherValues);
  const temperatureConverter = (valNum: string) => {
    let val = parseFloat(valNum);
    val = Math.round(val - 273.15);
    return val;
  };
  const pressureConverter = (valNum: number) => {
    let val = valNum;
    val = Math.round((val * 750.0616827) / 1000);
    return val;
  };
  const isEmptyOrSpaces = (str: string) => {
    return str === null || str.match(/^ *$/) !== null;
  };
  const getWeather = async (cityData: string) => {
    const isNotEmtyOrSpaces = !isEmptyOrSpaces(cityData);
    if (isNotEmtyOrSpaces) {
      const API_KEY = "516fa3e2ca0738cc84373fe362d7f8b6";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=${API_KEY}`
      );
      const json = await response.json();
      const weatherVal = Object.values(json.main);
      const city = json.name;
      const temp = temperatureConverter(weatherVal[0] as string);
      const pressure = pressureConverter(Number(weatherVal[4]));
      const humidity = Number(weatherVal[5]);
      const cloudsValue = json.clouds.all;
      const cloudsImages = [
        "sun",
        "cloud-sun",
        "cloud-sun",
        "cloud-sun",
        "cloud-sun",
        "cloud",
      ];
      const cloudsState = Math.floor((parseInt(cloudsValue) / 100) * 5.99);
      const clouds = cloudsImages[cloudsState];
      const wind = json.wind;
      const windDeg = wind.deg;
      const windSpeed = Math.round(parseInt(wind.speed) * 3.257918552036199);
      const speedIndexDirection = Math.floor((parseInt(windDeg) / 360) * 15.99);
      const windDirections = [
        "N",
        "NNE",
        "NE",
        "NEE",
        "E",
        "EES",
        "ES",
        "ESS",
        "S",
        "SSW",
        "SW",
        "SWW",
        "W",
        "WWN",
        "WN",
        "WNN",
      ];
      const winDir = windDirections[speedIndexDirection];
      const id = JSON.stringify(Math.floor(Math.random() * 100));
      const curWetheValues: IWeatherValues = {
        id: id,
        city: city,
        temp: temp,
        pressure: pressure,
        humidity: humidity,
        clouds: clouds,
        windDeg: winDir,
        windSpeed: windSpeed,
      };
      setWeatherValues(curWetheValues);
      return weatherValues;
    }
  };
  const handlerSetCity = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    getWeather(cityFromInput);
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
      <input
        type="text"
        placeholder={""}
        onChange={(e) => setCityFromInput(e.target.value)}
      />
      <button onClick={(e) => handlerSetCity(e)}>set new city</button>
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
