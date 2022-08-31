import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  greetingsChange,
  selectTime,
  setName,
  timeChange,
} from "./TimeSlice";

const Clock = () => {
  const { time, date, greeting, name } = useAppSelector(selectTime);
  const dispatch = useAppDispatch();
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
  const greetingFromLocal = localStorage.getItem("greeting");
  const nameFromLocal = JSON.parse(localStorage.getItem("name") || '""');
  const REGEX_FOR_NAME_INPUT = /^[a-zA-ZА-Яа-яЁё][a-zA-ZА-Яа-яЁё]{3,15}$/;
  const IsRegexName = REGEX_FOR_NAME_INPUT.test(nameFromLocal);
  return (
    <div>
      <div>{greetingFromLocal}</div>
      {IsRegexName ? (
        <div>{nameFromLocal}</div>
      ) : (
        <div>
          <input
            type="text"
            value={name}
            placeholder="please enter your name"
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </div>
      )}
      <div>{time}</div>
      <div className="">{date}</div>
    </div>
  );
};

export default Clock;
