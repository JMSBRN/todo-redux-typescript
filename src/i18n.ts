import i118n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector, { DetectorOptions } from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const languageFromLocal = 	JSON.parse(localStorage.getItem('language') || 	'"en"');

i118n
.use( Backend)
.use( LanguageDetector)
.use( initReactI18next)
.init({
	fallbackLng: `${languageFromLocal}`,
	debug: true,
	detection: {
		order: ['queryString', 'cookie'],
		cache: ['cookie'],
	} as DetectorOptions,
	interpolation: {
		escapeValue: false,
	},
});
export default i118n;