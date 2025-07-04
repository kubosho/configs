# @kubosho/configs

My Web frontend tool configs. Inspired by [@3846masa/configs](https://github.com/3846masa/configs).

[![npm version](https://img.shields.io/npm/v/@kubosho/configs.svg)](https://www.npmjs.com/package/@kubosho/configs)

## Install

```shell
npm add -D @kubosho/configs
```

**Attention: This package provides only config files. Please install required tools (e.g. ESLint, Prettier, etc.) in your project.**

## Usage

### ESLint

Install the required dependencies:

```shell
npm add -D eslint eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-simple-import-sort typescript-eslint
```

In use `eslint.config.mjs`:

```javascript
import config from '@kubosho/configs/eslint';

export default {
  ...config,
};
```

### Markdownlint

Install the required dependencies:

```shell
# For markdownlint-cli2 (recommended if you want to use extends)
npm add -D markdownlint-cli2

# OR for markdownlint-cli
npm add -D markdownlint-cli
```

In use `.markdownlint.json`:

```json
{
  "extends": "@kubosho/configs/markdownlint"
}
```

**Note:** The `extends` property only works with markdownlint-cli2. If using markdownlint-cli, you'll need to manually merge the configuration.

### Markuplint

Install the required dependencies:

```shell
npm add -D markuplint
```

In use `markuplint.config.mjs`:

```javascript
import config from '@kubosho/configs/markuplint';

export default {
  ...config,
};
```

### Prettier

Install the required dependencies:

```shell
npm add -D prettier
```

```javascript
module.exports = {
  ...require('@kubosho/configs/prettier'),
};
```

### Renovate

No npm packages required (GitHub App configuration only).

```json
{
  "extends": ["github>kubosho/configs//renovate/default"]
}
```

### Semantic Release

Install the required dependencies:

```shell
npm add -D semantic-release @semantic-release/changelog @semantic-release/commit-analyzer @semantic-release/git @semantic-release/github @semantic-release/npm @semantic-release/release-notes-generator conventional-changelog-conventionalcommits
```

In use `release.config.mjs`:

```javascript
import config from '@kubosho/configs/semantic_release';

export default {
  ...config,
};
```

### Stylelint

Install the required dependencies:

```shell
npm add -D stylelint stylelint-config-recommended
```

In use `stylelint.config.mjs`:

```javascript
import config from '@kubosho/configs/stylelint';

export default {
  ...config,
};
```

### Textlint

Install the required dependencies:

```shell
npm add -D textlint textlint-filter-rule-comments textlint-rule-no-dead-link textlint-rule-no-doubled-joshi textlint-rule-preset-jtf-style textlint-rule-preset-ai-writing
```

In use `.textlintrc.js`:

```javascript
const config = require('@kubosho/configs/textlint');

module.exports = {
  ...config,
};
```

### TypeScript

Install the required dependencies:

```shell
npm add -D typescript
```

In use `tsconfig.json`:

```json
{
  "extends": "@kubosho/configs/typescript/tsconfig.json"
}
```
