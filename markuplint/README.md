# @kubosho/configs/Markuplint

Markuplintの設定ファイルです。有効・無効にしているルールとその理由を書きます。

## 有効化

### [attr-duplication](https://markuplint.dev/ja/docs/rules/attr-duplication)

仕様では、開始タグに大文字・小文字問わず同じ属性を2つ以上含むことができないと書かれています。

> There must never be two or more attributes on the same start tag whose names are an ASCII case-insensitive match for each other.
> [13.1.2.3 Attributes](https://html.spec.whatwg.org/#attributes-2)

また重複した属性はパースエラーとなって全て無視されると定められています。

> duplicate-attribute
> This error occurs if the parser encounters an attribute in a tag that already has an attribute with the same name. The parser ignores all such duplicate occurrences of the attribute.
> [13.2.2 Parse errors](https://html.spec.whatwg.org/#parse-errors)

ただ実際のユーザーエージェントでは重複した属性が無視されるとは限らず、定義した属性の値が予期しない形で使われる可能性があります。

なので重複した属性を書けなくするため、有効化しています。

### [attr-value-quotes](https://markuplint.dev/ja/docs/rules/attr-value-quotes)

仕様では属性値の書き方として4つの書き方ができると定められています。

> Attributes can be specified in four different ways
> [13.1.2.3 Attributes](https://html.spec.whatwg.org/#attributes-2)

ただ多くのWebサイトでは値をダブルクオーテーションで囲って書かれており、事実上の標準になっているため、有効化しています。

## 無効化

### [class-naming](https://markuplint.dev/ja/docs/rules/class-naming)

クラス名は自分の中で一意に定まっておらず、そのときどきで良いと思ったものを採用するため、無効化しています。
