import { Box, Paper, Typography, Tooltip } from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { toDisplayDistance } from '../../utils/converter';
import { OpenMapIcon } from './openMapIcon';
import Temperature from './temperature';

export interface IForecastProps {
  datetime: number;
  weather: string;
  icon: string;
  tempMin: number;
  tempMax: number;
  humidity: number;
  wind: number;
  visibility: number;
}

const FLex = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
`;

const FLexColumn = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const Forecast = (props: IForecastProps) => {
  const date = moment.unix(props.datetime);
  return (
    <Box minWidth={200}>
      <Paper square>
        <FLex>
          <FLexColumn>
            <Typography>{date.format('hh:mm')}</Typography>
            <Typography>{date.format('ddd')}</Typography>
            <OpenMapIcon id={props.icon} title={props.weather} />
            <Typography>{props.weather}</Typography>
          </FLexColumn>
          <FLexColumn>
            <Tooltip title="Max/min temperature">
              <Box>
                <Temperature value={props.tempMin} />/<Temperature value={props.tempMax} />
              </Box>
            </Tooltip>
            <Tooltip title="Wind">
              <Typography>W: {props.wind}m/s</Typography>
            </Tooltip>
            <Tooltip title="Humidity">
              <Typography>H: {props.humidity}%</Typography>
            </Tooltip>
            <Tooltip title="Visibility">
              <Typography>V: {toDisplayDistance(props.visibility)}</Typography>
            </Tooltip>
          </FLexColumn>
        </FLex>
      </Paper>
    </Box>
  );
};

export default Forecast;

{
  /* */
}
