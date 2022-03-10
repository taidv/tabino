import { httpTimeout, openWeatherMapApiKey, openWeatherMapBaseUrl } from '../../config';
import logger from '../../utils/logger';
import axios from 'axios';
import moment from 'moment';

const openWeatherMap = axios.create({
  baseURL: openWeatherMapBaseUrl,
  timeout: httpTimeout,
  params: {
    appid: openWeatherMapApiKey,
  },
});

/**
 * Only keep 1 forecast per day at 09:00 JST (00 UTC)
 *
 * @param forecast list of forecast from openweather
 * @returns
 */
const hourlyForecastToDailyForecast = (forecast: any[]): any[] => {
  const cache = new Set();
  return forecast.filter((f) => {
    const { dt } = f;
    const date = moment.unix(dt).utc();
    const day = date.date();
    const hour = date.hour();
    if (hour !== 0) {
      return false;
    }
    if (!cache.has(day)) {
      cache.add(day);
      return true;
    }
    return false;
  });
};

export const forecast = async (city: string): Promise<any> => {
  try {
    const res = await openWeatherMap.get('forecast', { params: { q: `${city}`, lang: 'en', units: 'metric' } });
    const data = res?.data || {};
    logger.debug({ msg: `fetched ${data?.list?.length} forecast data` });
    const list = hourlyForecastToDailyForecast(data?.list);
    return { ...data, list };
  } catch (error) {
    logger.error({ msg: 'Failed to fetch forecast data', error });
    return {};
  }
};
