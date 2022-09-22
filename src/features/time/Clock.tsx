import React, { useEffect, useMemo, useState } from "react";
import * as Styled from "./Clock.style";
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { greetingsChange, IOption, selectTime, setDate, setName, timeChange } from "./TimeSlice";
import { setLocalCityName } from "../api-weather/apiWeatherSlice";
import settingsImg from './assets/settings.png'
import { setIsModal } from "../settings/settingsSlice";

const Clock = () => {
  const { t } = useTranslation();
  const { date, greeting, name } = useAppSelector(selectTime);
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(true);
  interface ITime {
    hours: string | number;
    minutes: string | number;
    seconds: string | number;
  }
  const hours = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
  const minutes = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
  const seconds = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
  const time: ITime = useMemo(() => {
    return  {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }, [hours, minutes, seconds])
  useEffect(() => {
    setInterval(() => {
      dispatch(timeChange(time));
    }, 1000);
  }, [time, dispatch]);
  useEffect(() => {
    const curHrs = parseInt(JSON.stringify((new Date().getHours() / 24) * 4));
    setInterval(() => {
      const greet = [
        "What are you doing that early?",
        t('Clock.greeting.goodMorning'),
        t('Clock.greeting.goodAfternoon'),
        t('Clock.greeting.goodEvening'),
    
      ][curHrs];
      dispatch(greetingsChange(greet));
      localStorage.setItem("greeting", JSON.stringify(greet));
    }, 1000);
  }, [dispatch, greeting, t]);
  const handlDisableInputs = () => {
    setIsEdit(true);
    const cityFromLocal = JSON.parse(localStorage.getItem('cityByDefault') || '""');
    dispatch(setLocalCityName(cityFromLocal));
    window.location.reload();
  };
  const greetingFromLocal = JSON.parse(localStorage.getItem("greeting") || '""');
  const nameFromLocal = JSON.parse(localStorage.getItem("name") || '""');
  const handleSetCityToLocal = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('cityByDefault', JSON.stringify(e.target.value));
  };
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  const languageFromLocal = 	JSON.parse(localStorage.getItem('language') || 	'"en"');
  const dateFromLocal = new Date().toLocaleDateString(languageFromLocal, options as IOption);
  useEffect(() => {
    dispatch(setDate(dateFromLocal));
  }, [dateFromLocal, dispatch])
  
  return (
    <Styled.ClockWrapper>
      <Styled.Greeting>{greetingFromLocal}</Styled.Greeting>
      {isEdit ? (
        <>
          <Styled.GreetingName onClick={() => setIsEdit(false)}>
            {nameFromLocal}
            <Styled.HoverMessage>{t("Clock.hoverMessage")}</Styled.HoverMessage>
          </Styled.GreetingName>
        </>
      ) : (
        <Styled.InputGreetingNameWrapper>
          <Styled.InputNameByDefault
            type="text"
            value={name}
            placeholder={t("Clock.inputNamePlaceholder")}
            onChange={(e) => dispatch(setName(e.target.value))}
            title="try click for confirm"
          />
          <div>
            <Styled.InputCityByDefault
              type="text"
              onChange={(e) => handleSetCityToLocal(e)}
              placeholder={t("Clock.inputCityPlaceholder")}
              />
          </div>
          <Styled.SubmitAndSettingsBtnWrapper>
            <Styled.SubmitBtn onClick={() => handlDisableInputs()} >{t('Clock.textSubmitBtn')}</Styled.SubmitBtn>
            <Styled.SettingsBtn onClick={() => dispatch(setIsModal())}>
              <Styled.SettingsImg src={settingsImg} alt="setting img button" />
            </Styled.SettingsBtn>
          </Styled.SubmitAndSettingsBtnWrapper>
        </Styled.InputGreetingNameWrapper>
      )}
        <Styled.Time>{time.hours}:{time.minutes}
          <Styled.Seconds>.{time.seconds}</Styled.Seconds>
        </Styled.Time>
      <Styled.Date>{date}</Styled.Date>
    </Styled.ClockWrapper>
  );
};

export default Clock;
