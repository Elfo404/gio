import { ComponentProps } from 'react';

import { Box } from './Box';
import { Container } from './src';

export const Template = ({
  fluid,
}: ComponentProps<typeof Container>): JSX.Element => {
  return (
    <Container fluid={fluid}>
      <Box>{fluid && 'Fluid '}Container</Box>
    </Container>
  );
};
