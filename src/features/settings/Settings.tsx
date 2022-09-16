import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './Settings.style';

const Settings = () => {
	const { i18n } = useTranslation();
	const setLanguage = (e:React.ChangeEvent<HTMLSelectElement>) => {
		localStorage.setItem('language', JSON.stringify(e.target.value))
		i18n.changeLanguage(e.target.value);
	}
	return (
		<Styled.SettingsWrapper>
			<Styled.Settings>
				<Styled.Language onChange={(e) => setLanguage(e)}>
					<option value={'en'} >select language</option>
					<option value={'en'}>en</option>
					<option value={'ru'}>ru</option>
				</Styled.Language>
			</Styled.Settings>
		</Styled.SettingsWrapper>
	)
}

export default Settings;