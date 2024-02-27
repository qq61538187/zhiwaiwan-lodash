### `_.escapeRegExp([string=''])`[​](#_escaperegexpstring "_escaperegexpstring的直接链接")

转义 `RegExp` 字符串中特殊的字符 "^", "$", "", ".", "\*", "+", "?", "(", ")", "\[", "\]", ", ", 和 "|" in .

#### 添加版本

3.0.0

#### 参数

1.  `[string='']` _(string)_: 要转义的字符串。

#### 返回

_(string)_: 返回转义后的字符串。

#### 例子

```js
_.escapeRegExp('[lodash](https://lodash.com/)');
// => '\[lodash\]\(https://lodash\.com/\)'

```