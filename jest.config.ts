import { join } from "path";

const config = {
  preset: "ts-jest",
  setupFilesAfterEnv: [
    "jest-extended",
    join(__dirname, "src", "setupTests.ts"),
  ],
  testEnvironment: "jsdom",
  snapshotSerializers: ["@emotion/jest/serializer"],
  moduleNameMapper: {
    "^@root(.*)$": join(__dirname, "src"),
  },
  modulePathIgnorePatterns: [join(__dirname, "src", "e2e")],
};

export default config;