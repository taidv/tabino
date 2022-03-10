import { Box, Paper, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { toDisplayDistance } from '../../utils/converter';
import { Chips } from '../common/chips';

export interface IPlaceProps {
  categories: string[];
  name: string;
  address: string;
  distance: number;
}

const Place = (props: IPlaceProps) => {
  const FLex = styled(Box)`
    display: flex;
    align-items: left;
    padding: 0.5rem;
    justify-content: space-evenly;
    flex-direction: column;
  `;
  const SafeTypography = styled(Typography)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
  return (
    <Box sx={{ minWidth: 300 }}>
      <Paper square>
        <FLex>
          <SafeTypography variant="h6">{props.name}</SafeTypography>
          <SafeTypography variant="body1">{props.address}</SafeTypography>
          <Typography variant="body1">{toDisplayDistance(props.distance)}</Typography>
          <Chips chipData={props.categories.map((cat, i) => ({ label: cat, key: i }))}></Chips>
        </FLex>
      </Paper>
    </Box>
  );
};

export default Place;
