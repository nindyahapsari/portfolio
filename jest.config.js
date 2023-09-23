module.exports = {
  preset: 'ts-jest',
  roots: ["<rootDir>/src"],
  transformIgnorePatterns: ['^.+\\.js$'],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  collectCoverage: false,
  moduleNameMapper: {


  },
  setupFilesAfterEnv: ['./setup-test.ts'],
  transform: {
        '^.+\\.(ts|tsx|js|jsx)?$': 'babel-jest',
    },
  }

