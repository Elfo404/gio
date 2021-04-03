import { css } from '@emotion/react';
import { ComponentProps } from 'react';

import { Col, Container, Row } from '../src';
import { Box } from './Box';

export const Template = (props: ComponentProps<typeof Row>): JSX.Element => {
  return (
    <Container
      css={css`
        border: 1px dashed salmon;
        padding-bottom: 0.5rem;
      `}
    >
      <Row {...props}>
        <Col xs={1 / 3}>
          <Box>A Column!</Box>
        </Col>
        <Col xs={1 / 3}>
          <Box tall>A Tall Column!</Box>
        </Col>
      </Row>
    </Container>
  );
};
