import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IWeatherValues {
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
  weatherCities: { city: string}[]
}
const initialState: IState = {
  apiData: "",
  weatherValues: {} as IWeatherValues,
  valueCity: "",
  error: "",
  isLoaded: false,
  weatherCities: [{ city: 'city'}],
  curCity: ''
};

function temperatureConverter(valNum: string) {
  let val = parseFloat(valNum);
  val = Math.round(val - 273.15);
  return val;
}
function pressureConverter(valNum: number) {
  let val = valNum;
  val = Math.round((val * 750.0616827) / 1000);
  return val;
}
const isEmptyOrSpaces = (str: string) => {
  return str === null || str.match(/^ *$/) !== null;
};
export const getAsyncApiWeather = createAsyncThunk(
  "weather",
  async (_, { dispatch }) => {
    const CITY_NAME: string = JSON.parse(localStorage.getItem("city") || "");
    const isNotEmtyOrSpaces = !isEmptyOrSpaces(CITY_NAME);
    if (isNotEmtyOrSpaces) {
      const API_KEY = "516fa3e2ca0738cc84373fe362d7f8b6";
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
      );
      const json = await response.json();
      const weatherVal = Object.values(json.main);
      const city = json.name;
      const temp = temperatureConverter(weatherVal[0] as string);
      const pressure = pressureConverter(Number(weatherVal[4]));
      const humidity = Number(weatherVal[5]);
      const cloudsValue = json.clouds.all;    
      const cloudsImages = ["sun", "cloud-sun", "cloud-sun", "cloud-sun", "cloud-sun", "cloud"];
      const cloudsState = Math.floor((parseInt(cloudsValue) / 100) * 5.99);
      const clouds = cloudsImages[cloudsState];
      const wind = json.wind;
      const windDeg = wind.deg;
      const windSpeed = Math.round(parseInt(wind.speed) * 3.257918552036199);
      const speedIndexDirection = Math.floor((parseInt(windDeg) / 360) * 15.99);
      const windDirections = [
        "N",
        "NNE",
        "NE",
        "NEE",
        "E",
        "EES",
        "ES",
        "ESS",
        "S",
        "SSW",
        "SW",
        "SWW",
        "W",
        "WWN",
        "WN",
        "WNN",
      ];
      const winDir = windDirections[speedIndexDirection];

      const weatherValues: IWeatherValues = {
        city: city,
        temp: temp,
        pressure: pressure,
        humidity: humidity,
        clouds: clouds,
        windDeg: winDir,
        windSpeed: windSpeed,
      };
      dispatch(setWetherValues(weatherValues));
    } else {
      dispatch(setError("please enter city name"));
    }
  }
);
export const apiWeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getApiData: (state, action) => {
      state.apiData = action.payload;
    },
    setWetherValues: (state, action) => {
      state.weatherValues = action.payload;
    },
    getCityName: (state, action) => {
      state.valueCity = action.payload;
      localStorage.setItem("city", JSON.stringify(state.valueCity));
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setNewWetherCity: (state) => {
      if (state.weatherCities.length < 4) {
        state.weatherCities = [...state.weatherCities, { city: '888'}];
      }
    }
  },
  extraReducers(builder) {
    builder.addCase(getAsyncApiWeather.pending, (state) => {
      state.isLoaded = true;
    });
    builder.addCase(getAsyncApiWeather.fulfilled, (state) => {
      state.isLoaded = true;
    });
    builder.addCase(getAsyncApiWeather.rejected, (state) => {
      console.log('failed');
      state.isLoaded = true;
    })
  },
});
export const { getApiData, setWetherValues, getCityName, setError, setNewWetherCity  } =
  apiWeatherSlice.actions;
export const selectWether = (state: RootState) => state.weather;
export default apiWeatherSlice.reducer;
