import { foursquareApiKey, foursquareBaseUrl, httpTimeout } from '../../config';
import logger from '../../utils/logger';
import axios from 'axios';

const foursquare = axios.create({
  baseURL: foursquareBaseUrl,
  timeout: httpTimeout,
  params: {
    locale: 'en',
  },
});
foursquare.defaults.headers.common['Authorization'] = foursquareApiKey;

export const searchPlaces = async (near: string): Promise<any> => {
  try {
    const res = await foursquare.get('places/search', { params: { near, sort: 'rating' } });
    const data = res?.data || {};
    logger.debug({ msg: `fetched ${data?.results?.length} foursquare places` });
    return data;
  } catch (error) {
    logger.error({ msg: 'Failed to fetch foursquare places', error });
    return {};
  }
};
