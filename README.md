# @kubosho/configs

My Web frontend tool configs. Inspired by [@3846masa/configs](https://github.com/3846masa/configs).

[![npm version](https://img.shields.io/npm/v/@kubosho/configs.svg)](https://www.npmjs.com/package/@kubosho/configs)

## Install

```shell
npm install --save-dev @kubosho/configs
```

## Usage

### ESLint

In use `eslint.config.mjs`:

```javascript
import config from '@kubosho/configs/eslint/index.mjs';

export default config;
```

### Markuplint

```javascript
import config from '@kubosho/configs/markuplint/index.mjs';

export default config;
```

### Prettier

```javascript
module.exports = {
  ...require('@kubosho/configs/prettier'),
};
```

### TypeScript

```json
{
  "extends": "@kubosho/configs/typescript/tsconfig.json"
}
```
