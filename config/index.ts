export const openWeatherMapApiKey = process.env.ENV_OPENWEATHERMAP_API_KEY || '';
export const openWeatherMapBaseUrl =
  process.env.ENV_OPENWEATHERMAP_BASE_URL || 'https://api.openweathermap.org/data/2.5/';
export const logLevel = process.env.ENV_LOG_LEVEL || 'info';
export const foursquareApiKey = process.env.ENV_FOURSQUARE_API_KEY || '';
export const foursquareBaseUrl = process.env.ENV_FOURSQUARE_BASE_URL || 'https://api.foursquare.com/v3/';
export const httpTimeout = parseInt(process.env.ENV_HTTP_TIMEOUT || '10000');
export const serverCacheTime = parseInt(process.env.ENV_SERVER_CACHE_TIME || '36000');
