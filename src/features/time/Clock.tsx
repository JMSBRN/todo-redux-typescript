import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAsyncApiWeather } from "../api-weather/apiWeatherSlice";
import { greetingsChange, selectTime, timeChange } from "./TimeSlice";

const Clock = () => {
  useEffect(() => {
   
  }, [])
  const { time, date, greeting } = useAppSelector(selectTime);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAsyncApiWeather());
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
      dispatch(greetingsChange(greet))  
  }, 1000)  
  },[dispatch])
  
  return (
    <>
    <div>{ greeting }</div>
      <div>{time}</div>
      <div className="">{date}</div>
    </>
  );
};

export default Clock;
