<script lang="ts">
	import { getForecast } from '$lib/weather';
	import icon from '$lib/assets/favicon.png';

	let { latitude, longitude }: { latitude: number; longitude: number } = $props();
	let weatherData = $derived(getForecast(latitude, longitude));
</script>

{#await weatherData}
	<div>Fetching weather data...</div>
{:then data}
	{@const wearAShirt = [
		data.periods[0].probabilityOfPrecipitation.value > 50,
		data.periods[0].temperature < 68,
		data.periods[0].relativeHumidity.value < 80,
		data.periods[0].isDaytime
	]}
	<div class="weather-container">
		<img
			src={icon}
			style="width: 50%;"
			alt="A drawing of a white shirt with a question mark on the front"
		/>
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
		<div class="overview">
			<p>{data.periods[0].probabilityOfPrecipitation.value}% precip</p>
			<p>{data.periods[0].temperature}°{data.periods[0].temperatureUnit}</p>
			<p>{data.periods[0].relativeHumidity.value}% humidity</p>
			<p>
				{#if data.periods[0].isDaytime}day{:else}night{/if}
			</p>
		</div>
	</div>
{:catch err}
	<p class="error">Error loading weather data: {err.message}</p>
{/await}

<style>
	.weather-container {
		max-width: 420px;
		margin: 1rem auto;
		padding: 1.2rem 1.6rem;
		background: rgba(255, 255, 255, 0.2);
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 14px;
		box-shadow: 0 4px 16px rgb(0, 0, 0);
		backdrop-filter: blur(6px);
		text-align: center;
		color: azure;
	}

	.overview {
		display: grid;
		grid-auto-flow: column;
	}

	.weather-container p {
		margin: 0.5rem 0;
		font-size: 1.2rem;
		line-height: 1.4;
	}

	div {
		text-align: center;
		font-size: 1.1rem;
		color: #cccccc;
	}

	.error {
		color: #ff6b6b;
		text-align: center;
		font-weight: 500;
		margin-top: 1rem;
	}

	.weather-container {
		animation: fadeIn 0.3s ease-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
