module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],

  modulePaths: ['<rootDir>/dist'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^environments/(.*)$': '<rootDir>/src/environments/$1',
    '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
    '^swiper_angular$': "<rootDir>/node_modules/swiper/angular",
  },
};