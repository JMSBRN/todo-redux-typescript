import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../app/hooks';
import { getWeather } from '../api-weather/api';
import { IWeatherValues, setTranslateCityName } from '../api-weather/apiWeatherSlice';
import * as Styled from './Settings.style';
import { setLanguage } from './settingsSlice';

const Settings = () => {
	const { i18n, t } = useTranslation();
	const dispatch = useAppDispatch();
	const setCityNameFromAsyncWeather = async () => {
		const languageFromLocal = JSON.parse(localStorage.getItem('language') || '"en"');
		const cityNameFromLocal = JSON.parse(localStorage.getItem('cityByDefault') || '""');
		const curWeatheValues = await getWeather(cityNameFromLocal, languageFromLocal) as IWeatherValues;
		dispatch(setTranslateCityName(curWeatheValues.city));
	};
	const handlSetLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		localStorage.setItem('language', JSON.stringify(e.target.value))
		i18n.changeLanguage(e.target.value);
		dispatch(setLanguage(e.target.value));
		setCityNameFromAsyncWeather();
	};
	return (
		<Styled.SettingsWrapper>
			<Styled.Settings>
				<Styled.Language onChange={(e) => handlSetLanguage(e)}>
					<option value={'en'} >{t('Settings.selectLanguage')}</option>
					<option value={'en'}>en</option>
					<option value={'ru'}>ru</option>
				</Styled.Language>
				{/* <Styled.Theme>
					<Styled.ThemeBtnsWrapper>
						<li><input type="radio" name="1" id="" /></li>
						<li><input type="radio" name="1" id="" /></li>
						<li><input type="radio" name="1" id="" /></li>
					</Styled.ThemeBtnsWrapper>
				</Styled.Theme> */}
			</Styled.Settings>
		</Styled.SettingsWrapper>
	)
}
export default Settings;