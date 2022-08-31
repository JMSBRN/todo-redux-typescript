import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IOption {
  weekday: "long" | "short" | "narrow" | undefined;
  year: "numeric" | "2-digit" | undefined;
  month: "long" | "short" | "narrow" | "numeric" | "2-digit" | undefined;
  day: "numeric" | "2-digit" | undefined;
}
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const date = new Date().toLocaleDateString("en-US", options as IOption);
interface IState {
  time: string;
  date: string;
  greeting: string;
  name: string;
  isName: boolean;
}
const initialState: IState = {
  time: new Date().toTimeString().split(" ")[0],
  date: date,
  greeting: '',
  name: '',
  isName: false,
};
export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    timeChange: (state, action) => {
      state.time = action.payload;
    },
    dateChange: (state, action) => {
      state.date = action.payload;
    },
    greetingsChange: (state, action) => {
      state.greeting = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
      localStorage.setItem("name", JSON.stringify(state.name));
    },
  },
});

export const { timeChange, dateChange, greetingsChange, setName } =
  timeSlice.actions;
export const selectTime = (state: RootState) => state.time;
export default timeSlice.reducer;
