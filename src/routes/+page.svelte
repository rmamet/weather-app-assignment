<script lang="ts">
	import CurrentWeather from '$lib/components/CurrentWeather.svelte';

	let latitude: number | null = $state(null);
	let longitude: number | null = $state(null);
</script>

<button
	onclick={() => {
		latitude = 30.2672;
		longitude = -97.7431;
	}}
>
	Get Austin, TX Weather
</button>
<button
	onclick={() => {
		latitude = 42.5796;
		longitude = -71.428;
	}}>Get Tyngsboro weather</button
>
<button
	onclick={() => {
		latitude = 37.7749;
		longitude = -122.4194;
	}}>Get San Francisco Weather</button
>

{#if latitude !== null && longitude !== null}
	<h1>Weather for ({latitude}, {longitude})</h1>
	<CurrentWeather {latitude} {longitude} />
{/if}
