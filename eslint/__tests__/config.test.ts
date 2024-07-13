import path from "node:path";

// @ts-expect-error FlatESLint is not type-defined but can be used
import { FlatESLint } from "eslint/use-at-your-own-risk";
import { describe, expect, it } from "vitest";

describe("ESLint configuration", () => {
  it("should match the ESLint configuration snapshot for JavaScript", async () => {
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

  it("should match the ESLint configuration snapshot for TypeScript", async () => {
    // Given
    const configFile = path.resolve(__dirname, "../index.mjs");
    const testFile = path.resolve(__dirname, "../examples/src/bubbleSort.ts");
    const eslint = new FlatESLint({
      overrideConfigFile: configFile,
      warnIgnored: true,
    });

    // When
    const result = await eslint.calculateConfigForFile(testFile);

    // Then
    expect(result).toMatchSnapshot();
  });
});
