import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IWeatherValues {
  id: string;
  city: string;
  temp: number;
  pressure: number;
  humidity: number;
  clouds: string;
  windDeg: string;
  windSpeed: number;
}
interface IState {
  apiData: string;
  weatherValues: IWeatherValues;
  valueCity: string;
  error: string;
  isLoaded: boolean;
  curCity: string;
  weatherCities: IWeatherValues[];
  id: string;
  isEntered: boolean;
}
const initialState: IState = {
  apiData: "",
  weatherValues: {} as IWeatherValues,
  valueCity: "",
  error: "",
  isLoaded: false,
  weatherCities: [],
  curCity: "",
  id: "",
  isEntered: true,
};
export const apiWeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getApiData: (state, action) => {
      state.apiData = action.payload;
    },
    setWeatherValues: (state, action) => {
      state.weatherValues = action.payload;
    },
    getCityName: (state, action) => {
      state.valueCity = action.payload;
      localStorage.setItem("city", JSON.stringify(state.valueCity));
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setNewWeatherCity: (state, action) => {
      state.weatherCities = action.payload;
      const id = JSON.stringify(Math.floor(Math.random() * 100));
      if (state.weatherCities.length < 4) {
        state.weatherCities = [
          ...state.weatherCities,
          {
            id: id,
            city: "",
            temp: 0,
            pressure: 0,
            humidity: 0,
            clouds: "",
            windDeg: "",
            windSpeed: 0,
          },
        ];
      }
      state.weatherValues = {} as IWeatherValues;
      state.valueCity = "";
    },
    getId: (state, action) => {
      state.id = action.payload;
    },
    setWeatherCities: (state, action) => {
      state.weatherCities = action.payload;
    },
  },
});
export const {
  getApiData,
  setWeatherValues,
  getCityName,
  setError,
  setNewWeatherCity,
  getId,
  setWeatherCities,
} = apiWeatherSlice.actions;
export const selectWeather = (state: RootState) => state.weather;
export default apiWeatherSlice.reducer;
