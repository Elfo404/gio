import type { InitialOptionsTsJest } from 'ts-jest/dist/types';

import baseConfig from './jest.config.base';

const config: InitialOptionsTsJest = {
  ...baseConfig,
  projects: ['<rootDir>/packages/grid'],
};

export default config;
