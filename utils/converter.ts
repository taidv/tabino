import { IPlaceProps } from '../components/place/place';
import { IForecastProps } from '../components/weather/forecast';

export const openMapDataToForecast = (data: any): IForecastProps => {
  const { dt, main, visibility, wind, weather } = data;
  return {
    datetime: dt,
    weather: weather[0]?.main,
    icon: weather[0]?.icon,
    wind: wind?.speed,
    humidity: main?.humidity,
    tempMax: main?.temp_max,
    tempMin: main?.temp_min,
    visibility,
  };
};
export const foursquareToPlace = (data: any): IPlaceProps => {
  const { categories, distance, location, name } = data;
  return {
    name,
    distance,
    address: location?.formatted_address,
    categories: categories?.map((cat: any) => cat?.name),
  };
};

export const toDisplayDistance = (value: number) => {
  const km = value / 1e3;
  return km > 1 ? `${km.toFixed(0)}km` : `${value}m`;
};
