import baseConfig from './jest.config.base';

export default {
  ...baseConfig,
  roots: ['<rootDir>'],
  projects: ['<rootDir>/packages/grid'],
};
