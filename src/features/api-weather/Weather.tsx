import React, { useEffect, useState } from "react";
import { IWeatherValues, selectWeather } from "./apiWeatherSlice";
import * as Styled from "./Weather.style";
import cloudImg from "../api-weather/assets/weather/cloud.png";
import cloudSunImg from "../api-weather/assets/weather/sun_clouds.png";
import sunImg from "../api-weather/assets/weather/sun.png";
import { getWeather } from "./api";
import { useAppSelector } from "../../app/hooks";
import { useTranslation } from "react-i18next";
import i18n from '../../i18n';
export interface IWeather {
  cityFromPorps?: string;
  IsInputWithBtn?: boolean;
  isCursor?: boolean;
}
const Weather = ({ isCursor, cityFromPorps, IsInputWithBtn = true }: IWeather) => {
  const { t } = useTranslation();
const { localCityName, translateCityName } = useAppSelector(selectWeather);
  const [cityFromInput, setCityFromInput] = useState("");
  const [weatherValues, setWeatherValues] = useState({} as IWeatherValues);
  const [isEntered, setIsEntered] = useState(true)
  const getAsyncWeather = async () => {
    const curWeatheValues = await getWeather(cityFromInput || cityFromPorps!) as IWeatherValues;
    setWeatherValues(curWeatheValues);
  };
  useEffect(() => {
    if (cityFromPorps) {
      getAsyncWeather();
    }
  }, [localCityName])

  const handlerSetCity = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    getAsyncWeather();
    if (cityFromInput) {
      setCityFromInput('');
    }
    setIsEntered(false);
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
  const speedIndexDirection = Math.floor((parseInt(windDeg) / 360) * 15.99);
		const windDirections = [
			i18n.t("WindDirections.N"),
			i18n.t("WindDirections.NNE"),
			i18n.t("WindDirections.NE"),
			i18n.t("WindDirections.NEE"),
			i18n.t("WindDirections.E"),
			i18n.t("WindDirections.EES"),
			i18n.t("WindDirections.ES"),
			i18n.t("WindDirections.ESS"),
			i18n.t("WindDirections.S"),
			i18n.t("WindDirections.SSW"),
			i18n.t("WindDirections.SW"),
			i18n.t("WindDirections.SWW"),
			i18n.t("WindDirections.W"),
			i18n.t("WindDirections.WWN"),
			i18n.t("WindDirections.WN"),
			i18n.t("WindDirections.WNN"),
		];
		const winDir = windDirections[speedIndexDirection];    
  return (
    <Styled.WeatherWrapper isCursor={isCursor}>
      {
        IsInputWithBtn && <>
          {isEntered &&
            <Styled.InputAndBtnWrapper>
              <Styled.Input
                type="text"
                placeholder={""}
                value={cityFromInput}
                onChange={(e) => setCityFromInput(e.target.value)}
              />
              <>
                <Styled.SetCityBtn onClick={(e) => handlerSetCity(e)}>{t('Weather.textSetCityBtn')}</Styled.SetCityBtn >
              </>
            </Styled.InputAndBtnWrapper>
          }
        </>
      }
      <Styled.City>{translateCityName || city}</Styled.City>
      <Styled.TempWrapper>
        <Styled.Temp>{temp} °C</Styled.Temp>
        <Styled.Clouds src={img} alt={clouds} width="20" />
      </Styled.TempWrapper>
      <Styled.Pressure>⬇️ {pressure} <Styled.HmHg>{t('Weather.mmHg')}</Styled.HmHg></Styled.Pressure>
      <Styled.Humidity>💧 {humidity}%</Styled.Humidity>
      <Styled.Wind>
        <Styled.WindDirection>{winDir}</Styled.WindDirection>
        <Styled.WindSpeed>{windSpeed} {t('Weather.kmPerHour')}</Styled.WindSpeed>
      </Styled.Wind>
    </Styled.WeatherWrapper>
  );
};

export default Weather;
