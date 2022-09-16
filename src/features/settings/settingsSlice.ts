import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface ISettingsState {
  isModalSettings: boolean;
}
const initialState: ISettingsState = {
  isModalSettings: false,
};
export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setIsModal: (state) => {
      state.isModalSettings ? state.isModalSettings = false : state.isModalSettings = true ;
    },
  },
});
export const { setIsModal } = settingsSlice.actions;
export const selectSettings = (state: RootState) => state.settings;
export default settingsSlice.reducer;
