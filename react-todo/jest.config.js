// jest.config.cjs
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  }
};
