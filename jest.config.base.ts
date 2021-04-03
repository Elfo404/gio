export default {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.tsx', 'src/**/*.ts'],
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  coverageDirectory: '<rootDir>/coverage/',
};
