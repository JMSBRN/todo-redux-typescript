import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface ISettingsState {
  isModalSettings: boolean;
  language: string;
}
const languageFromLocal = JSON.parse(localStorage.getItem('language')|| '"en"') 
const initialState: ISettingsState = {
  isModalSettings: false,
  language: languageFromLocal,
};
export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setIsModal: (state) => {
      state.isModalSettings ? state.isModalSettings = false : state.isModalSettings = true ;
    },
    setLanguage: (state,action) => {
     state.language = action.payload;
    }
  },
});
export const { setIsModal, setLanguage } = settingsSlice.actions;
export const selectSettings = (state: RootState) => state.settings;
export default settingsSlice.reducer;
