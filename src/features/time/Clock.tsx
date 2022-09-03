import React, { useEffect, useState } from "react";
import * as Styled from "./Clock.style";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { greetingsChange, selectTime, setName, timeChange } from "./TimeSlice";

const Clock = () => {
  const { time, date, greeting, name } = useAppSelector(selectTime);
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(true);
  useEffect(() => {
    setInterval(() => {
      dispatch(timeChange(new Date().toTimeString().split(" ")[0]));
    }, 1000);
  }, [dispatch]);
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
          <Styled.GreetingName onDoubleClick={() => setIsEdit(false)}>
            {nameFromLocal}
            <Styled.HoverMessage> try double click for edit</Styled.HoverMessage>
          </Styled.GreetingName>
        </Styled.GreetingNameWrapper>
      ) : (
        <Styled.InputGreetingNameWrapper onDoubleClick={() => handlDisableInputs()}>
          <Styled.InputGreetingName
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
        </Styled.InputGreetingNameWrapper>
      )}
      <Styled.Time>{time}</Styled.Time>
      <Styled.Date className="">{date}</Styled.Date>
    </Styled.ClockWrapper>
  );
};

export default Clock;
