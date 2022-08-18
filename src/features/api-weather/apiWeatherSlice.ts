import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IWeatherValues {
  city: string;
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  pressure: number;
  humidity: number;
  seaLevel: number;
  grndLevel: number;
  description: string;
  main: string;
  windDeg: string;
  windGust: string;
  windSpeed: string;
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
    const pressure = Number(weatherVal[4]);
    const humidity = Number(weatherVal[5]);
    const seaLevel = Number(weatherVal[6]);
    const grndLevel = Number(weatherVal[7]);
    const descriptionWeather = json.weather[0];
    const description = descriptionWeather.description;
    const main = descriptionWeather.main;
    const wind = json.wind;
    const windDeg = wind.deg;
    const windGust = wind.gust;
    const windSpeed= wind.speed;
    const weatherValues: IWeatherValues = {
      city: city,
      temp: temp,
      feelsLike: feelsLike,
      tempMin: tempMin,
      tempMax: tempMax,
      pressure: pressure,
      humidity: humidity,
      seaLevel: seaLevel,
      grndLevel: grndLevel,
      description: description,
      main: main,
      windDeg: windDeg,
      windGust: windGust,
      windSpeed: windSpeed,
      
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
    });
  },
});
export const { getApiData, setWeherValues } = apiWeatherSlice.actions;
export const selectWether = (state: RootState) => state.weather;
export default apiWeatherSlice.reducer;
