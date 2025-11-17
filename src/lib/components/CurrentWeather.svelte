<script lang="ts">
	import { getForecast } from '$lib/weather';

	let { latitude, longitude }: { latitude: number; longitude: number } = $props();
	let weatherData = $derived(getForecast(latitude, longitude));
</script>

{#await weatherData}
	<div>Fetching weather data...</div>
{:then data}
	{@const wearAShirt = [data.periods[0].probabilityOfPrecipitation.value > 50, data.periods[0].temperature < 68, data.periods[0].relativeHumidity.value < 80, data.periods[0].isDaytime]}
	<div class="weather-container">
		<h2>Should you wear a shirt?</h2>
		{#if wearAShirt[0]}
			<p>It's raining, so you should probably wear a shirt</p>
		{:else if wearAShirt[1]}
			<p>It's a little cold, so you should probably wear a shirt</p>
		{:else if wearAShirt[2]}
			<p>The air is dry today, so you should probably wear a shirt</p>
		{:else if wearAShirt[3]}
			<p>It is currently night time, so you should probably wear a shirt</p>
		{:else}
			<p>Today is a perfect day to not wear a shirt!</p>
		{/if}
		<!-- <p>Temperature: {data.periods[0].temperature}°{data.periods[0].temperatureUnit}</p>
		<p>Condition: {data.periods[0].shortForecast}</p>
		<h3>Raw Data:</h3>
		<pre>
      {JSON.stringify(data, null, 2)}
    </pre> -->
	</div>
{:catch err}
	<p class="error">Error loading weather data: {err.message}</p>
{/await}
