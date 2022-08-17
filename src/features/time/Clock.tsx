import React, { useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTime, timeChange } from './TimeSlice';

const Clock = () => {
const { time, date }= useAppSelector(selectTime);
const dispatch = useAppDispatch();

useEffect(() => {
  setInterval((
  ) => {
    dispatch(timeChange(new Date().toTimeString().split(" ")[0]))
  } , 1000 )
}, [dispatch])
  
  return (
    <><div>{time}</div>
    <div className="">{date}</div></>

  );
};

export default Clock;