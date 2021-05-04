import { useGrid } from './GridConfigProvider';
import { Breakpoints } from '.';

export const media = (size: keyof Breakpoints) =>
  `@media only screen and (min-width: ${useGrid().breakpoints[size]}em)`;
