import path from 'node:path';

import { FlatESLint } from 'eslint/use-at-your-own-risk';
import { describe, expect, it } from 'vitest';

describe('ESLint configuration', () => {
  it('should match the ESLint configuration snapshot for JavaScript', async () => {
    // Given
    const configFile = path.resolve(__dirname, '../index.mjs');
    const testFile = path.resolve(__dirname, '../examples/src/bubbleSort.mjs');
    const eslint = new FlatESLint({
      overrideConfigFile: configFile,
      warnIgnored: true,
    });

    // When
    const { rules } = await eslint.calculateConfigForFile(testFile);

    // Then
    expect(rules).toMatchSnapshot();
  });

  it('should match the ESLint configuration snapshot for JSX', async () => {
    // Given
    const configFile = path.resolve(__dirname, '../index.mjs');
    const testFile = path.resolve(__dirname, '../examples/src/Image.jsx');
    const eslint = new FlatESLint({
      overrideConfigFile: configFile,
      warnIgnored: true,
    });

    // When
    const { rules } = await eslint.calculateConfigForFile(testFile);

    // Then
    expect(rules).toMatchSnapshot();
  });

  it('should match the ESLint configuration snapshot for TypeScript', async () => {
    // Given
    const configFile = path.resolve(__dirname, '../index.mjs');
    const testFile = path.resolve(__dirname, '../examples/src/bubbleSort.ts');
    const eslint = new FlatESLint({
      overrideConfigFile: configFile,
      warnIgnored: true,
    });

    // When
    const { rules } = await eslint.calculateConfigForFile(testFile);

    // Then
    expect(rules).toMatchSnapshot();
  });
});
