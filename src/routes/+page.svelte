<script lang="ts">
	import CurrentWeather from '$lib/components/CurrentWeather.svelte';

	let latitude: number | null = $state(null);
	let longitude: number | null = $state(null);

	let tempLat: number | null = $state(null);
	let tempLong: number | null = $state(null);
</script>

<h2>Should you wear a shirt?</h2>

<div class="buttons-n-stuff">
	<button
		onclick={() => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						latitude = position.coords.latitude;
						longitude = position.coords.longitude;
					},
					() => {
						alert('Location is disabled on this device. Please enable it, and try again');
					}
				);
			} else {
				alert('Geolocation is not supported by this browser.');
			}
		}}>Get Current Location Weather</button
	>
</div>
<span class="buttons-n-stuff">or</span>
<span class="buttons-n-stuff">
	<input
		type="text"
		id="latitude"
		placeholder="Latitude"
		bind:value={tempLat}
		inputmode="numeric"
		pattern="\d*"
	/>
	<input
		type="text"
		id="longitude"
		placeholder="Longitude"
		bind:value={tempLong}
		inputmode="numeric"
		pattern="\d*"
	/>
	<button
		onclick={() => {
			// latitude = 42.5796;
			// longitude = -71.428;
			latitude = tempLat;
			longitude = tempLong;
		}}>Get Weather</button
	>
</span>
{#if latitude !== null && longitude !== null}
	<!-- <h1>Weather for ({latitude}, {longitude})</h1> -->
	<CurrentWeather {latitude} {longitude} />
{/if}

<style>
	h2 {
		font-size: 1.8rem;
		text-align: center;
		margin-bottom: 1rem;
		font-weight: 600;
	}

	:global(body) {
		font-family: system-ui, sans-serif;
		background: #0a0a0a;
		margin: 0;
		padding: 0;
		color: azure;
	}

	button,
	input {
		font-size: 1rem;
		border-radius: 8px;
		padding: 0.6rem 1rem;
		border: 1px solid #ccc;
	}

	button {
		background: #6bce67;
		color: white;
		border: none;
		cursor: pointer;
		transition: background 0.15s;
	}

	button:hover {
		background: #81ca7f;
	}

	input {
		background: white;
		width: 130px;
		transition: all 0.5s;
	}

	input:focus {
		outline: none;
		border-color: #81ca7f;
		box-shadow: 0 0 0 2px rgba(69, 190, 119, 0.3);
	}

	h2,
	button,
	input,
	span {
		text-align: center;
	}

	.buttons-n-stuff {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: fit-content;
	}

	#latitude,
	#longitude {
		display: inline-block;
		margin: 0.3rem;
	}

	span {
		margin: 0.5rem auto;
		color: #ccc;
		font-weight: 500;
	}
</style>
