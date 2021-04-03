import { Box } from './Box';
import { Col, Container, Row } from './src';

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
