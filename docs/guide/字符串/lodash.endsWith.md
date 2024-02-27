### `_.endsWith([string=''], [target], [position=string.length])`[​](#_endswithstring-target-positionstringlength "_endswithstring-target-positionstringlength的直接链接")

检查字符串`string`是否以给定的`target`字符串结尾。

#### 添加版本

3.0.0

#### 参数

1.  `[string='']` _(string)_: 要检索的字符串。
2.  `[target]` _(string)_: 要检索字符。
3.  `[position=string.length]` _(number)_: 检索的位置。

#### 返回

_(boolean)_: 如果字符串`string`以`target`字符串结尾，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.endsWith('abc', 'c');
// => true
 
_.endsWith('abc', 'b');
// => false
 
_.endsWith('abc', 'b', 2);
// => true

```