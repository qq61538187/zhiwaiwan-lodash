### `_.padStart([string=''], [length=0], [chars=' '])`[​](#_padstartstring-length0-chars "_padstartstring-length0-chars的直接链接")

如果`string`字符串长度小于 `length` 则在左侧填充字符。 如果超出`length`长度则截断超出的部分。

#### 添加版本

4.0.0

#### 参数

1.  `[string='']` _(string)_: 要填充的字符串。
2.  `[length=0]` _(number)_: 填充的长度。
3.  `[chars=' ']` _(string)_: 填充字符。

#### 返回

_(string)_: 返回填充后的字符串。

#### 例子

```js
_.padStart('abc', 6);
// => '   abc'
 
_.padStart('abc', 6, '_-');
// => '_-_abc'
 
_.padStart('abc', 3);
// => 'abc'

```