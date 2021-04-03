import { ComponentProps } from 'react';

import { Container } from '../src';
import { Box } from './Box';

export const Template = ({
  fluid,
}: ComponentProps<typeof Container>): JSX.Element => {
  return (
    <Container fluid={fluid}>
      <Box>{fluid && 'Fluid '}Container</Box>
    </Container>
  );
};
