import { ComponentProps } from 'react';

import { Box } from './Box';
import { Container, Row } from './src';

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
