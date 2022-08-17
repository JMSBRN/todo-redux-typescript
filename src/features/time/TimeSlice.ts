import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IOption {
    weekday: "long" | "short" | "narrow" | undefined;
    year: "numeric" | "2-digit" | undefined;
    month: "long" | "short" | "narrow" | "numeric" | "2-digit" | undefined;
    day: "numeric" | "2-digit" | undefined;
}
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const date = new Date().toLocaleDateString('en-US', options as IOption)

const initialState = {
    time: new Date().toTimeString().split(" ")[0],
    date: date,
}
export const timeSlice = createSlice({
    name: 'time',
    initialState,
    reducers: {
        timeChange: (state, action) => {
            state.time = action.payload;
        },
        dateChange: (state, action) => {
            state.date = action.payload
        }
    }
});

export const { timeChange, dateChange } = timeSlice.actions;
export const selectTime = (state: RootState) => state.time;
export default timeSlice.reducer;