import { ReactNode, createContext, useContext } from 'react';

import { GridConfig } from './types';

const GridContext = createContext<GridConfig | null>(null);

interface Props {
  children: ReactNode;
  value: GridConfig;
}

export const GridConfigProvider = (props: Props): JSX.Element => (
  <GridContext.Provider {...props} />
);

export const useGrid = (): GridConfig => {
  const config = useContext(GridContext);
  if (!config) throw 'Use GridConfigProvider first';

  return config;
};
