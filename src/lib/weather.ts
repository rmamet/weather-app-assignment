// src/lib/weather.ts
// Minimal NOAA weather.gov wrapper
// Author: T. Hinkle / GPT-5

export interface ForecastPeriod {
	name: string;
	startTime: string;
	endTime: string;
	temperature: number;
	temperatureUnit: string;
	shortForecast: string;
	detailedForecast: string;
	icon: string;
}

export interface WeatherResponse {
	updated: string;
	periods: ForecastPeriod[];
}

export interface PointInfo {
	office: string;
	gridX: number;
	gridY: number;
	forecastUrl: string;
	forecastHourlyUrl: string;
	location: {
		city: string;
		state: string;
		coordinates: [number, number]; // [lon, lat]
	};
}

/**
 * Resolve a lat/lon into a forecast URL and metadata.
 */
async function getPoint(lat: number, lon: number): Promise<PointInfo> {
	const res = await fetch(`https://api.weather.gov/points/${lat},${lon}`, {
		headers: { 'User-Agent': 'weather-demo (yourname@example.com)' }
	});
	if (!res.ok) throw new Error(`Failed to fetch point (${res.status})`);
	const data = await res.json();
	const p = data.properties;
	return {
		office: p.gridId,
		gridX: p.gridX,
		gridY: p.gridY,
		forecastUrl: p.forecast,
		forecastHourlyUrl: p.forecastHourly,
		location: {
			city: p.relativeLocation.properties.city,
			state: p.relativeLocation.properties.state,
			coordinates: p.relativeLocation.geometry.coordinates
		}
	};
}

/**
 * Fetches the forecast for a given latitude/longitude.
 * Handles gridpoint resolution automatically.
 */
export async function getForecast(lat: number, lon: number): Promise<WeatherResponse> {
	const point = await getPoint(lat, lon);
	console.log('Point info for location: ', point);
	const res = await fetch(point.forecastUrl, {
		headers: { 'User-Agent': 'weather-demo (yourname@example.com)' }
	});
	if (!res.ok) throw new Error(`Forecast fetch failed (${res.status})`);
	const data = await res.json();
	const props = data.properties;
	console.log('Forecast data: ', data);
	return {
		updated: props.updated,
		periods: props.periods
	};
}
