### `_.truncate([string=''], [options=])`[​](#_truncatestring-options "_truncatestring-options的直接链接")

截断`string`字符串，如果字符串超出了限定的最大值。 被截断的字符串后面会以 omission 代替，omission 默认是 "..."。

#### 添加版本

4.0.0

#### 参数

1.  `[string='']` _(string)_: 要截断的字符串。
2.  `[options=]` _(Object)_: 选项对象。
3.  `[options.length=30]` _(number)_: 允许的最大长度。
4.  `[options.omission='...']` _(string)_: 超出后的代替字符。
5.  `[options.separator]` _(RegExp|string)_: 截断点。

#### 返回

_(string)_: Returns the truncated string.

#### 例子

```js
_.truncate('hi-diddly-ho there, neighborino');
// => 'hi-diddly-ho there, neighbo...'
 
_.truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': ' '
});
// => 'hi-diddly-ho there,...'
 
_.truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': /,? +/
});
// => 'hi-diddly-ho there...'
 
_.truncate('hi-diddly-ho there, neighborino', {
  'omission': ' [...]'
});
// => 'hi-diddly-ho there, neig [...]'


```