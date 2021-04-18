import { Col, Container, Row } from '../src';
import { Box } from './Box';

export const Template = (): JSX.Element => (
  <Container fluid>
    <Row>
      <Col xs>
        <Box>Auto Grow</Box>
      </Col>
      <Col xs={1 / 4}>
        <Box>1/4</Box>
      </Col>
      <Col xs={1 / 5}>
        <Box>1/5</Box>
      </Col>
    </Row>

    <Row>
      <Col xs={1 / 4}>
        <Box>1 / 4</Box>
      </Col>
      <Col xs>
        <Box>Auto Grow</Box>
      </Col>
      <Col xs>
        <Box>Auto Grow</Box>
      </Col>
    </Row>

    <Row>
      <Col xs={false} md={1 / 2}>
        <Box>hidden xs</Box>
      </Col>
      <Col xs>
        <Box>Auto Grow</Box>
      </Col>
    </Row>
  </Container>
);
