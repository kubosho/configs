# @kubosho/configs

My Web frontend tool configs.

Inspired by [@3846masa/configs](https://github.com/3846masa/configs).

## Install

Use npm:

```shell
npm install --save-dev @kubosho/configs
```

Use yarn:

```shell
yarn add --dev @kubosho/configs
```

## Usage

### ESLint

```javascript
module.exports = {
  extends: [require.resolve('@kubosho/configs/eslint')],
};
```

### TypeScript

```json
{
  "extends": "@kubosho/configs/tsconfig.json"
}
```
