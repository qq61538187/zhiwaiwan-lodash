### `_.pad([string=''], [length=0], [chars=' '])`[​](#_padstring-length0-chars "_padstring-length0-chars的直接链接")

如果`string`字符串长度小于 `length` 则从左侧和右侧填充字符。 如果没法平均分配，则截断超出的长度。

#### 添加版本

3.0.0

#### 参数

1.  `[string='']` _(string)_: 要填充的字符串。
2.  `[length=0]` _(number)_: 填充的长度。
3.  `[chars=' ']` _(string)_: 填充字符。

#### 返回

_(string)_: 返回填充后的字符串。

#### 例子

```js
_.pad('abc', 8);
// => '  abc   '
 
_.pad('abc', 8, '_-');
// => '_-abc_-_'
 
_.pad('abc', 3);
// => 'abc'

```