module.exports = {
  setupFiles: [
    '<rootDir>/jest.setup.js'
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '<rootDir>/packages/**/__tests__/**/*.ts',
    '!<rootDir>/packages/**/templates/**/*.ts',
  ],
  testMatch: [
    '<rootDir>/packages/**/*.test.ts'
  ],
  transform: {
    '^.+\\.js?$': '<rootDir>/node_modules/babel-jest'
  },
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
};