import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../app/hooks';
import * as Styled from './Settings.style';
import { setLanguage } from './settingsSlice';

const Settings = () => {
	const { i18n, t } = useTranslation();
	const dispatch = useAppDispatch();

	const handlSetLanguage = (e:React.ChangeEvent<HTMLSelectElement>) => {
		localStorage.setItem('language', JSON.stringify(e.target.value))
		i18n.changeLanguage(e.target.value);
		dispatch(setLanguage(e.target.value))
	}
	return (
		<Styled.SettingsWrapper>
			<Styled.Settings>
				<Styled.Language onChange={(e) => handlSetLanguage(e)}>
					<option value={'en'} >{t('Settings.selectLanguage')}</option>
					<option value={'en'}>en</option>
					<option value={'ru'}>ru</option>
				</Styled.Language>
			</Styled.Settings>
		</Styled.SettingsWrapper>
	)
}
export default Settings;