import Forecast from './forecast';
import { openMapDataToForecast } from '../../utils/converter';
import { Grid } from '@material-ui/core';
import PageSection from '../common/pageSection';

const WeatherSection = ({ data, city }: any) => {
  const { list } = data || {};

  return (
    <PageSection title="Weather" description={`5 days weather forecast for ${city}`}>
      <Grid container spacing={1}>
        {list?.map((data: any, id: number) => {
          const forecast = openMapDataToForecast(data);
          return (
            <Grid item key={id} xs={6} sm={4} md={3} lg={2}>
              <Forecast {...forecast} />
            </Grid>
          );
        })}
      </Grid>
    </PageSection>
  );
};

export default WeatherSection;
