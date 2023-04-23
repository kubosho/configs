## [2.1.0](https://github.com/kubosho/configs/compare/v2.0.0...v2.1.0) (2023-04-23)


### ✨ Features

* **prettier:** introduce prettier config ([3ef3b63](https://github.com/kubosho/configs/commit/3ef3b63e8c196319ff804117532676aa14b153bc))

## [2.0.0](https://github.com/kubosho/configs/compare/v1.2.5...v2.0.0) (2023-04-22)


### ⚠ BREAKING CHANGES

* Changed location of TypeScript and ESLint configuration files.

tsconfig.json needs to be rewritten as follows for the path in `extends`.

```diff
- "extends":"@kubosho/configs/tsconfig"
+ "extends": "@kubosho/configs/typescript/tsconfig.json"
```

### ✨ Features

* move config files to root directory ([6a4c0b0](https://github.com/kubosho/configs/commit/6a4c0b0d30ad182047a6c77892a6f2e633ddb061))

## [1.2.5](https://github.com/kubosho/configs/compare/v1.2.4...v1.2.5) (2023-04-20)


### 📚 Some changes

* **deps:** bump @typescirpt-eslint/parser from 5.58.0 to 5.59.0 ([751f934](https://github.com/kubosho/configs/commit/751f934c432690b4daf810569fd800a5f2ff79ef))

## [1.2.4](https://github.com/kubosho/configs/compare/v1.2.3...v1.2.4) (2023-04-20)


### 📚 Some changes

* **deps:** bump @typescript-eslint/eslint-plugin from 5.57.0 to 5.59.0 ([cb75c9f](https://github.com/kubosho/configs/commit/cb75c9fbd3eef68a5b03b0a9ce35750046843ce9))
* **deps:** bump eslint from 8.37.0 to 8.38.0 ([415bc65](https://github.com/kubosho/configs/commit/415bc65dcc67bfbdab8aef9b2a26ff66b64faf93))
* **package:** fix preset name ([7ee18c8](https://github.com/kubosho/configs/commit/7ee18c86d298284ee0cca1625ebb6c1c3f1fe47c))
* **package:** modify changelog styles ([321cbc7](https://github.com/kubosho/configs/commit/321cbc7c6e0a03d13c7fb9b5f72d6d8a70af6b20))

## [1.2.3](https://github.com/kubosho/configs/compare/v1.2.2...v1.2.3) (2023-04-20)

## [1.2.2](https://github.com/kubosho/configs/compare/v1.2.1...v1.2.2) (2023-04-08)


### Bug Fixes

* **tsconfig:** fix unintentionally deleting skipLibCheck settings ([0994f70](https://github.com/kubosho/configs/commit/0994f700fc1e7e0e7c4525e072dfe6187e5c644f))

## [1.2.1](https://github.com/kubosho/configs/compare/v1.2.0...v1.2.1) (2023-04-03)


### Bug Fixes

* **package:** correct path for eslint/rules/typescript.js ([d2c0e9e](https://github.com/kubosho/configs/commit/d2c0e9e955ccee13054f5fff56e77424c8c22e90))

# [1.2.0](https://github.com/kubosho/configs/compare/v1.1.1...v1.2.0) (2023-04-03)


### Bug Fixes

* **eslint:** use prettier rules ([4ef3f53](https://github.com/kubosho/configs/commit/4ef3f5384ffa4156ff394b024b238ed627837cf7))


### Features

* **eslint:** introduce TypeScript rules ([a9da524](https://github.com/kubosho/configs/commit/a9da52487cbec5462aff92a0a73ed450e3cff578))
* move config files to lib/ ([8aa4d78](https://github.com/kubosho/configs/commit/8aa4d78db612c60c079adb5374e486a5a2da03b4))
* **typescript:** introduce tsconfig.json ([18cc611](https://github.com/kubosho/configs/commit/18cc6112e32228cc36aa1f870250511ee5f28386))

## [1.1.1](https://github.com/kubosho/configs/compare/v1.1.0...v1.1.1) (2023-04-03)


### Bug Fixes

* **package:** add exports field ([889cd23](https://github.com/kubosho/configs/commit/889cd233ee4e6b00914920c3c947212abe5f7a33))

# [1.1.0](https://github.com/kubosho/configs/compare/v1.0.0...v1.1.0) (2023-04-03)


### Features

* **eslint:** introduce prettier rules ([76dadd7](https://github.com/kubosho/configs/commit/76dadd75cd41087c13589f1349fc306841ad14ab))

# 1.0.0 (2023-04-03)


### Bug Fixes

* **package:** add files config ([d104196](https://github.com/kubosho/configs/commit/d104196c09368bd2237fa20191d8dd224b742112))


### Features

* **eslint:** add ESLint config ([b759ab5](https://github.com/kubosho/configs/commit/b759ab5d76c0544a08d8df88a2c5cf6360109edb))