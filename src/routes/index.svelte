<script>
	import { getWeatherFrom } from "../services/weather.js";
	import WeatherFooter from "../components/weather-footer.svelte";
	import WeatherIcon from "../components/weather-icon.svelte";
	const weatherPromise = getWeatherFrom();
</script>

<style>
    h1{
        font-weight: 400;
		color: #333;
		text-transform: uppercase;
    }
	h2{
		font-weight: 300;
		font-size: 100px;
		color: #333;
		text-transform: uppercase;

	}
	h3{
		font-weight: 400;
		transform: rotate(-90deg);
		position: absolute;
		top: 30px;
		right: 15px;
	}
</style>

{#await weatherPromise then weather }
	<h1>{weather.locationName}</h1>
	<h2>{weather.temperature}</h2>
	<h3>{weather.conditionText}</h3>
	<WeatherIcon icon={weather.conditionIcon} text={weather.conditionText}/>
{/await}
<WeatherFooter />

