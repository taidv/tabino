import { Box, Chip } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

interface ChipData {
  key: number;
  label: string;
}

export const Chips: React.FC<{ chipData: ChipData[] }> = ({ chipData }) => {
  const ListItem = styled('span')`
    margin: 0.5rem;
    max-width: 200;
  `;
  const Container = styled(Box)`
    display: flex;
    overflow: hidden;
  `;
  return (
    <Container>
      {chipData.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip size="small" label={data.label} />
          </ListItem>
        );
      })}
    </Container>
  );
};
