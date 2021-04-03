import { Col, Container, Row } from '../src';
import { Box } from './Box';

export const Template = (): JSX.Element => {
  return (
    <Container fluid>
      <Row>
        <Col>Auto-grow</Col>
      </Row>
      <Row>
        <Col xs>
          <Box>xs</Box>
        </Col>
        <Col xs>
          <Box>xs</Box>
        </Col>
        <Col xs>
          <Box>xs</Box>
        </Col>
      </Row>

      <Row>
        <Col xs={1 / 2}>
          <Box>xs = 1 / 2</Box>
        </Col>
        <Col xs>
          <Box>xs</Box>
        </Col>
        <Col xs>
          <Box>xs</Box>
        </Col>
      </Row>
    </Container>
  );
};
