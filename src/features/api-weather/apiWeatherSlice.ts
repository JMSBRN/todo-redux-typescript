import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = {
  apiData: "",
};

export const getAsyncApiWeather = createAsyncThunk("weather", async () => {
  const CITY_NAME = "Minsk";
  const API_KEY = "516fa3e2ca0738cc84373fe362d7f8b6";
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
  );
  const json = await response.json();
  console.log(json);
});

export const apiWeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getApiData: (state, action) => {
      state.apiData = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAsyncApiWeather.pending, () => {
      console.log("pending");
    });
  },
});
export const { getApiData } = apiWeatherSlice.actions;
export const selectWether = (state: RootState) => state.weather;
export default apiWeatherSlice.reducer;
