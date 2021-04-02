import { useGrid } from '../GridConfigProvider';
import { GridConfig } from '../types';

export const useStyles = <
  T extends (gridConfig: GridConfig, ...args: K) => ReturnType<T>,
  K extends unknown[]
>(
  factory: T,
  ...args: K
): ReturnType<T> => factory(useGrid(), ...args);
