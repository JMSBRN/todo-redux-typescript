import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IWeatherValues {
  city: string;
  temp: string;
  feelsLike: string;
  tempMin: string;
  tempMax: string;
  pressure: string;
  humidity: string;
  seaLevel: string;
  grndLevel: string;
}
const initialState = {
  apiData: "",
  weatherValues: {} as IWeatherValues,
};

function temperatureConverter(valNum: string) {
  let val = parseFloat(valNum);
  val = Math.round(val - 273.15);
  return val;
}

export const getAsyncApiWeather = createAsyncThunk(
  "weather",
  async (_, { dispatch }) => {
    const CITY_NAME = "Minsk";
    const API_KEY = "516fa3e2ca0738cc84373fe362d7f8b6";
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
    );
    const json = await response.json();
    console.log(json);
    const weatherVal = Object.values(json.main);
    const city = json.name;
    const temp = temperatureConverter(weatherVal[0] as string);
    const feelsLike = temperatureConverter(weatherVal[1] as string);
    const tempMin = temperatureConverter(weatherVal[2] as string);
    const tempMax = temperatureConverter(weatherVal[3] as string);
    const pressure = weatherVal[4];
    const humidity = weatherVal[5];
    const seaLevel = weatherVal[6];
    const grndLevel = weatherVal[7];
    const weatherValues = {
      city: city,
      temp: temp,
      feelsLike: feelsLike,
      tempMin: tempMin,
      tempMax: tempMax,
      pressure: pressure,
      humidity: humidity,
      seaLevel: seaLevel,
      grndLevel: grndLevel,
    };
    dispatch(setWeherValues(weatherValues));
  }
);

export const apiWeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getApiData: (state, action) => {
      state.apiData = action.payload;
    },
    setWeherValues: (state, action) => {
      state.weatherValues = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAsyncApiWeather.pending, () => {});
    builder.addCase(getAsyncApiWeather.fulfilled, () => {
      console.log();
    });
  },
});
export const { getApiData, setWeherValues } = apiWeatherSlice.actions;
export const selectWether = (state: RootState) => state.weather;
export default apiWeatherSlice.reducer;
