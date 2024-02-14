document.getElementById('weather-form').addEventListener('submit', async (e) => {
	e.preventDefault();
	const cityName = document.getElementById('city-input').value;
	const weatherData = await getWeatherData(cityName);
	displayWeatherData(weatherData);
});

document.getElementById('current-location-button').addEventListener('click', async () => {
	const position = await getCurrentLocation();
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const weatherData = await getWeatherData(lat, lon);
	displayWeatherData(weatherData);
});

async function getWeatherData(cityName, lat = null, lon = null) {
	const apiKey = 'YOUR_API_KEY';
	let url = https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey};
	if (lat && lon) {
		url = https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey};
	}
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

function displayWeatherData(data) {
	document.getElementById('city-name').textContent = data.name;
	document.getElementById('