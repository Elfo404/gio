export { Container } from './Container';
export { Row } from './Row';
export { Col } from './Col';
export { GridConfigProvider, useGrid } from './GridConfigProvider';

export interface GridConfig {
  breakpoints: Breakpoints;
  gutter: `${number}rem`;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Breakpoints {}
