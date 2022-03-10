import { Box, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

interface IPageSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const PageSection: React.FC<IPageSectionProps> = ({ title, description, children }) => {
  const Header = styled(Box)`
    padding: 2rem 1rem;
  `;
  return (
    <Box>
      <Header>
        <Typography variant="h4">{title}</Typography>
        {description && <Typography variant="body1">{description}</Typography>}
      </Header>
      <Box>{children}</Box>
    </Box>
  );
};

export default PageSection;
