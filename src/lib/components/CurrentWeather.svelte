<script lang="ts">
	import { getForecast } from '$lib/weather';

	let { latitude, longitude }: { latitude: number; longitude: number } = $props();
	let weatherData = $derived(getForecast(latitude, longitude));
</script>

{#await weatherData}
	<div>Fetching weather data...</div>
{:then data}
	<div class="weather-container">
		<h2>Current Weather</h2>
		<p>Temperature: {data.periods[0].temperature}°{data.periods[0].temperatureUnit}</p>
		<p>Condition: {data.periods[0].shortForecast}</p>
		<h3>Raw Data:</h3>
		<pre>
      {JSON.stringify(data, null, 2)}
    </pre>
	</div>
{:catch err}
	<p class="error">Error loading weather data: {err.message}</p>
{/await}
