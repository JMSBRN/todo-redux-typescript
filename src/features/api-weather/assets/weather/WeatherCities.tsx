import React from "react";
import { Reorder } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import {
  selectWeather,
  setNewWeatherCity,
  setWeatherCities,
} from "../../apiWeatherSlice";
import Weather from "../../Weather";
import * as Styled from "./WeatherCities.style";
import { useTranslation } from "react-i18next";
const WeatherCities = () => {
  const { t } = useTranslation();
  const { weatherCities, translateCityName } = useAppSelector(selectWeather);
  const dispatch = useAppDispatch();
  const cityFromLocal = JSON.parse(localStorage.getItem('cityByDefault') || '""');
  return (
    <>
      <Styled.DefaultWeather>
        {cityFromLocal ?
          <Weather translateCityName={translateCityName} cityFromProps={cityFromLocal} IsInputWithBtn={false} />
          : <Styled.NoCityMessage> {t("WeatherCities.nowWeatherCityMessage")} </Styled.NoCityMessage>}
      </Styled.DefaultWeather>
      <Reorder.Group
        as="div"
        axis="y"
        onReorder={(weatherCities) => {
          dispatch(setWeatherCities(weatherCities));
        }}
        values={weatherCities}
      >
        <Styled.WeatherCityes>
          <Styled.AddCityBtn
            onClick={() => dispatch(setNewWeatherCity(weatherCities))}
          >
            {t('WeatherCities.textAddCityBtn')}
          </Styled.AddCityBtn>
          {weatherCities.map((el) => (
            <Reorder.Item
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={el.id}
              value={el}
            >
              <Weather isCursor={true}/>
            </Reorder.Item>
          ))}
        </Styled.WeatherCityes>
      </Reorder.Group>
    </>
  );
};

export default WeatherCities;
