import React from 'react';
import { useRouter } from 'next/router';
import { Box, Divider, Typography } from '@material-ui/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getDestinations } from '../services/destinations/static';
import NavBar from '../components/common/navbar';
import { forecast } from '../services/weather/openWeatherMap';
import { searchPlaces } from '../services/place/foursquare';
import WeatherSection from '../components/weather/weatherSection';
import PlaceSection from '../components/place/placeSection';
import { serverCacheTime } from '../config';

const Destination = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { destinations, places, weather } = props;
  const { name, country } = weather?.city || {};
  const { destination } = router.query;

  return (
    <Box>
      <NavBar current={destination as string} destinations={destinations}></NavBar>

      <Box>
        <Typography variant="h2">
          {name}, {country}
        </Typography>
        <Divider />
      </Box>

      <WeatherSection data={weather} city={name} />
      <PlaceSection data={places} city={name} />
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const current = params?.destination as string;
  const results = await Promise.allSettled([getDestinations(), forecast(current), searchPlaces(current)]);
  const [destinations, weather, places] = results.map((rs: any) => rs?.value);
  return {
    revalidate: serverCacheTime,
    props: { current, destinations, weather, places },
  };
};

export const getStaticPaths = async () => {
  const destinations = await getDestinations();
  const paths = destinations.map((destination) => ({ params: { destination } }));
  return { paths, fallback: true };
};

export default Destination;
