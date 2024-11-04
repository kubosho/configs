# @kubosho/configs/renovate

Renovateの設定ファイルで有効にしているプリセットやルールを書きます。

---

まず前提として、下記のルールはすべて `npm` の依存関係に対して動作します。

## [:disableDependencyDashboard](https://docs.renovatebot.com/presets-default/#disabledependencydashboard)

RenovateのDependency Dashboardは個人的に邪魔だと思ってしまうため、無効化するプリセットを有効にしています。

## [group:monorepos]

よく知られているモノレポ構成のパッケージをまとめて更新する設定です。

## [replacements:all](https://docs.renovatebot.com/presets-replacements/#replacementsall)

名前が変更されたソフトウェアは、名前変更後のパッケージを使うようにする設定です。

## packageRules

- `dependencies` に含まれるパッケージは `chore(deps): commit message` の形式でコミットメッセージが書かれます
- `devDependencies` に含まれるパッケージは `chore(deps-dev): commit message` の形式でコミットメッセージが書かれます
- patch version（fix version）に該当するパッケージは自動的にマージします
