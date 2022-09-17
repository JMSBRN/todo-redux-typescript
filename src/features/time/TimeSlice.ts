import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IOption {
  weekday: "long" | "short" | "narrow" | undefined;
  year: "numeric" | "2-digit" | undefined;
  month: "long" | "short" | "narrow" | "numeric" | "2-digit" | undefined;
  day: "numeric" | "2-digit" | undefined;
}

interface IState {
  time: string;
  date: string;
  greeting: string;
  name: string;
  isName: boolean;
  language: string;
}
export const today = new Date().toTimeString().split(" ")[0];
const initialState: IState = {
  time: today,
  date: '',
  greeting: '',
  name: '',
  isName: false,
  language: '',
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
    setLanguage: (state, action) => {
       state.language = action.payload;
    },
    setDate: (state, action) => {
       state.date = action.payload;
    }
  },
});

export const { timeChange, dateChange, greetingsChange, setName, setLanguage, setDate } =
  timeSlice.actions;
export const selectTime = (state: RootState) => state.time;
export default timeSlice.reducer;
