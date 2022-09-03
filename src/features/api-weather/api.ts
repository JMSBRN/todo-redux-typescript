import { IWeatherValues } from "./apiWeatherSlice";

const temperatureConverter = (valNum: string) => {
	let val = parseFloat(valNum);
	val = Math.round(val - 273.15);
	return val;
};
const pressureConverter = (valNum: number) => {
	let val = valNum;
	val = Math.round((val * 750.0616827) / 1000);
	return val;
};
const isEmptyOrSpaces = (str: string) => {
	return str === null || str.match(/^ *$/) !== null;
};
export const getWeather = async (cityData: string) => {
	const isNotEmtyOrSpaces = !isEmptyOrSpaces(cityData);
	if (isNotEmtyOrSpaces) {
		const API_KEY = "692558f436b41d827e09484ce4725e62";
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=${API_KEY}`
		);
		const json = await response.json();
		const weatherVal = Object.values(json.main);
		const city = json.name;
		const temp = temperatureConverter(weatherVal[0] as string);
		const pressure = pressureConverter(Number(weatherVal[4]));
		const humidity = Number(weatherVal[5]);
		const cloudsValue = json.clouds.all;
		const cloudsImages = [
			"sun",
			"cloud-sun",
			"cloud-sun",
			"cloud-sun",
			"cloud-sun",
			"cloud",
		];
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
		const id = JSON.stringify(Math.floor(Math.random() * 100));
		const weatheValues: IWeatherValues = {
			id: id,
			city: city,
			temp: temp,
			pressure: pressure,
			humidity: humidity,
			clouds: clouds,
			windDeg: winDir,
			windSpeed: windSpeed,
		};
		return weatheValues;
	}
};