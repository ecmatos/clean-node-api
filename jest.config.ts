/** @type {import('jest').Config} */
const config = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  testEnvironmen: 'node',
  trasform: {
    '.+\\.ts$': 'ts-jest'
  }
};

module.exports = config;
