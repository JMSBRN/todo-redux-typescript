import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { greetingsChange, selectTime, timeChange } from "./TimeSlice";

const Clock = () => {
  const { time, date, greeting } = useAppSelector(selectTime);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setInterval(() => {
      dispatch(timeChange(new Date().toTimeString().split(" ")[0]));
    }, 1000);
  }, [dispatch]);
  useEffect(() => {
    const curHrs = parseInt(JSON.stringify(new Date().getHours() / 24 * 4));
    setInterval(() => {
      const  greet = [
          'What are you doing that early?',
          'Good Morning',
          'Good Afternoon',
          'Good Evening'
      ][curHrs];
      dispatch(greetingsChange(greet));
      localStorage.setItem('greeting', JSON.stringify(greet))
  }, 1000)  
  },[dispatch, greeting])
  const greetingFromLocal = localStorage.getItem('greeting');
  return (
    <>
    <div>{ greetingFromLocal }</div>
      <div>{time}</div>
      <div className="">{date}</div>
    </>
  );
};

export default Clock;
