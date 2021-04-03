import baseConfig from '../../jest.config.base';
import { name } from './package.json';

export default {
  ...baseConfig,
  testEnvironment: 'jsdom',
  name,
  displayName: name,
};
