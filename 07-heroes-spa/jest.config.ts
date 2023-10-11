export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest" 
  // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__test__/__mocks__/fileMock.js',
    "^@/(.*)": "<rootDir>/src/$1",
    "^@heroes/(.*)": "<rootDir>/src/heroes/$1",
    "^@auth/(.*)": "<rootDir>/src/auth/$1",
    "^@ui/(.*)": "<rootDir>/src/ui/$1",
  },
}
