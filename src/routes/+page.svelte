<script lang="ts">
	import CurrentWeather from '$lib/components/CurrentWeather.svelte';

	let latitude: number | null = $state(null);
	let longitude: number | null = $state(null);

	let tempLat: number | null = $state(null);
	let tempLong: number | null = $state(null);
	
</script>


<button onclick={() => {
	if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition((position)=>{latitude=position.coords.latitude;longitude=position.coords.longitude}, ()=>{alert("Location is disabled on this device. Please enable it, and try again")});
  	} else { 
    	alert("Geolocation is not supported by this browser.");
  	}
}}>Get Current Location Weather</button>
<p>or</p>
<input
	type="text"
	id="latitude"
	placeholder="Latitude"
	bind:value={tempLat}
/>
<input
	type="text"
	id="longitude"
	placeholder="Longitude"
	bind:value={tempLong}
/>
<button
	onclick={() => {
		// latitude = 42.5796;
		// longitude = -71.428;
		latitude = tempLat
		longitude = tempLong
	}}>Get Weather</button
>

{#if latitude !== null && longitude !== null}
	<h1>Weather for ({latitude}, {longitude})</h1>
	<CurrentWeather {latitude} {longitude} />
{/if}
