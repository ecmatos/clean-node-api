/** @type {import('jest').Config} */
const config = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': ['ts-jest',{isolatedModules: true}]
  }
};

module.exports = config;
