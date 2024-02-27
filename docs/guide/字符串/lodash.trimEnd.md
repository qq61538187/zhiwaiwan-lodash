### `_.trimEnd([string=''], [chars=whitespace])`[​](#_trimendstring-charswhitespace "_trimendstring-charswhitespace的直接链接")

从`string`字符串中移除后面的 空格 或 指定的字符。

#### 添加版本

4.0.0

#### 参数

1.  `[string='']` _(string)_: 要处理的字符串。
2.  `[chars=whitespace]` _(string)_: 要移除的字符。

#### 返回

_(string)_: 返回处理后的字符串。

#### 例子

```js
_.trimEnd('  abc  ');
// => '  abc'
 
_.trimEnd('-_-abc-_-', '_-');
// => '-_-abc'

```