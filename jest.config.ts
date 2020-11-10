export default {
  roots: ['<rootDir>/client'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/client/setupEnzyme.ts'],
  // snapshotSerializers: ['enzyme-to-json/serializer'],
  clearMocks: true,
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['client/**/*.{js,jsx,ts,tsx}'],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'ts', 'json', 'tsx'],
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost',
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
