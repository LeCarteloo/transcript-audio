module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {},
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
  roots: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
