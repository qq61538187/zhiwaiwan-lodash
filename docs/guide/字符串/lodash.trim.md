### `_.trim([string=''], [chars=whitespace])`[​](#_trimstring-charswhitespace "_trimstring-charswhitespace的直接链接")

从`string`字符串中移除前面和后面的 空格 或 指定的字符。

#### 添加版本

3.0.0

#### 参数

1.  `[string='']` _(string)_: 要处理的字符串。
2.  `[chars=whitespace]` _(string)_: 要移除的字符。

#### 返回

_(string)_: 返回处理后的字符串。

#### 例子

```js
_.trim('  abc  ');
// => 'abc'
 
_.trim('-_-abc-_-', '_-');
// => 'abc'
 
_.map(['  foo  ', '  bar  '], _.trim);
// => ['foo', 'bar']

```