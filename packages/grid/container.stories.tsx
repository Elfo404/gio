import { css } from '@emotion/react';
import type { Meta } from '@storybook/react/types-6-0';

import { Container, GridConfigProvider } from './src';
import { GridConfig } from './src/types';

export const gridConfig: GridConfig = {
  breakpoints: { xs: 15, sm: 20, md: 25, lg: 30 },
  gutter: '1rem',
};

export const Box = (props) => (
  <div
    css={css`
      background-color: rgba(233, 233, 233, 0.1);
      padding: 0.5rem;
      border-radius: 4px;
    `}
    {...props}
  />
);

export const decorators: Meta['decorators'] = [
  (story) => (
    <GridConfigProvider value={gridConfig}>{story()}</GridConfigProvider>
  ),
];

export const Template = ({ fluid }) => {
  return (
    <Container fluid={fluid}>
      <Box>{fluid && 'Fluid '}Container</Box>
    </Container>
  );
};
