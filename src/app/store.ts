import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todoReducer from '../features/todolist/todoSlice';
import timeReducer from '../features/time/TimeSlice';
import weatherReducer from '../features/api-weather/apiWeatherSlice';
import settingsReducer from '../features/settings/settingsSlice';
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    time: timeReducer,
    weather: weatherReducer,
    settings: settingsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
