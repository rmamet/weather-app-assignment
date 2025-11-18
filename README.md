# Weather App Assignment

This template contains simple starter code for fetching a forecast and displaying it.

Your mission? Build a fun and original weather app using this data.

Options:

1. A highly localized weather app designed to show weather focusing on a specific area or set of areas (for example: where to bike near Tyngsboro based on weather; what the weather is like along Route 90, what the surfing conditions are like at various beaches in California, etc).
2. A weather app that combines data from this API with other data sources (for example: combining weather data with event data to show what events are happening in good weather, etc).
3. A clever use of forecast to solve a problem; for example, "when should I run?" could be an app that takes a location, a desired window for exercise, and then suggests the best "windows" for scheduling exercise based on forecast data.
4. A slick, modern UI showing a regular old forecast, using your own design savvy to highlight weather types, etc. Basically, a regular weather app, but with a look and feel that is all your own.
5. Your own idea! Be creative. It can be practical or whimsical. What it _must_ do is use the forecast data from this API in some way.

## RUBRIC:

1. Beauty & Design:
   [x] Is the App immediately visually appealing?
   [x] Do you have a consistent visual style and design language (color, icons, typography, etc)
2. Functionality and UX:
   [x] Does the app work well?
   [x] Is it easy to use and understand?
   [x] Does the user need instructions (bad) or can they immediately understand how to use it (good)?
   [x] Do you handle API errors and delays gracefully (loading states, error messages, etc)?
   [ ] Do you cache data where appropriate to avoid excessive API calls and improve performance? (we should be able to store data in localStorage to provide a more instantaneous experience on repeat visits).
3. Responsive design
   [x] Your app should be optimized for mobile (most likely user for a weather app) but also work well on desktop, etc.

## Extensions

Note: if you want to go further, you can look at integrating other APIs (https://openweathermap.org/api is one example). Most APIs are _not open_ and cannot be called browser-side like the NWS API; you will need to build a simple backend (for example, using SvelteKit endpoints) to proxy requests to these APIs. Using the NETLIFY adapter for SVELTEKIT and Netlify for hosting is one option if you want to pursue that option.
