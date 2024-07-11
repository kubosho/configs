import path from "node:path";

import pkg from "eslint/use-at-your-own-risk";
import { expect, it } from "vitest";

const { FlatESLint } = pkg;

it("should match the ESLint configuration snapshot", async () => {
  // Given
  const configFile = path.resolve(__dirname, "../index.mjs");
  const testFile = path.resolve(__dirname, "../examples/src/bubbleSort.mjs");
  const eslint = new FlatESLint({
    overrideConfigFile: configFile,
    warnIgnored: true,
  });

  // When
  const result = await eslint.calculateConfigForFile(testFile);

  // Then
  expect(result).toMatchSnapshot();
});
