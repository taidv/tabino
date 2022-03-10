import Place from './place';
import { foursquareToPlace } from '../../utils/converter';
import { Grid } from '@material-ui/core';
import PageSection from '../common/pageSection';

const ExporeSection = ({ data, city }: any) => {
  const { results } = data || {};

  return (
    <PageSection title="Expore" description={`Explore places near ${city}`}>
      <Grid container spacing={1}>
        {results?.map((data: any, id: number) => {
          const place = foursquareToPlace(data);
          return (
            <Grid item key={id} xs={12} md={6}>
              <Place {...place} />
            </Grid>
          );
        })}
      </Grid>
    </PageSection>
  );
};

export default ExporeSection;
