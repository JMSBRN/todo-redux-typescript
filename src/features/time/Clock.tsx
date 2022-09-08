import React, { useEffect, useState } from "react";
import * as Styled from "./Clock.style";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { greetingsChange, selectTime, setName, timeChange } from "./TimeSlice";
import { setLocalCityName } from "../api-weather/apiWeatherSlice";

const Clock = () => {
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
  const time: ITime = {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
  useEffect(() => {
    setInterval(() => {
      dispatch(timeChange(time));
    }, 1000);
  }, [time]);
  useEffect(() => {
    const curHrs = parseInt(JSON.stringify((new Date().getHours() / 24) * 4));
    setInterval(() => {
      const greet = [
        "What are you doing that early?",
        "Good Morning",
        "Good Afternoon",
        "Good Evening",
      ][curHrs];
      dispatch(greetingsChange(greet));
      localStorage.setItem("greeting", JSON.stringify(greet));
    }, 1000);
  }, [dispatch, greeting]);
  const handlDisableInputs = () => {
    setIsEdit(true);
    const cityFromLocal = JSON.parse(localStorage.getItem('cityByDefault') || '""');
    dispatch(setLocalCityName(cityFromLocal))
  };
  const greetingFromLocal = JSON.parse(localStorage.getItem("greeting") || '""');
  const nameFromLocal = JSON.parse(localStorage.getItem("name") || '""');
  const handleSetCityToLocal = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('cityByDefault', JSON.stringify(e.target.value));
  };
  return (
    <Styled.ClockWrapper>
      <Styled.Greeting>{greetingFromLocal}</Styled.Greeting>
      {isEdit ? (
        <Styled.GreetingNameWrapper>
          <Styled.GreetingName onClick={() => setIsEdit(false)}>
            {nameFromLocal}
            <Styled.HoverMessage> try double click for edit</Styled.HoverMessage>
          </Styled.GreetingName>
        </Styled.GreetingNameWrapper>
      ) : (
        <Styled.InputGreetingNameWrapper>
          <Styled.InputCityByDefault
            type="text"
            value={name}
            placeholder="please enter your name"
            onChange={(e) => dispatch(setName(e.target.value))}
            title="try double click for confirm"
          />
          <div>
            <Styled.InputCityByDefault
              type="text"
              onChange={(e) => handleSetCityToLocal(e)}
              placeholder="please enter your  city for weather" />
          </div>
          <Styled.SubmitBtn onClick={() => handlDisableInputs()} >submit</Styled.SubmitBtn>
        </Styled.InputGreetingNameWrapper>
      )}
      <Styled.TimeWrapper>
        <Styled.Time>{time.hours}:{time.minutes}
          <Styled.Seconds>.{time.seconds}</Styled.Seconds>
        </Styled.Time>
      </Styled.TimeWrapper>
      <Styled.Date className="">{date}</Styled.Date>
    </Styled.ClockWrapper>
  );
};

export default Clock;
