import { ComponentProps } from 'react';

import { Container, Row } from '../src';
import { Box } from './Box';

export const Template = (props: ComponentProps<typeof Row>): JSX.Element => {
  return (
    <Container>
      <Row {...props}>
        <Box>A Box!</Box>
        <Box tall>A tall Box!</Box>
      </Row>
    </Container>
  );
};
