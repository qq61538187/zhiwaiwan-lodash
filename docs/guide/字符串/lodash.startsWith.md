### `_.startsWith([string=''], [target], [position=0])`[​](#_startswithstring-target-position0 "_startswithstring-target-position0的直接链接")

检查字符串`string`是否以 `target` 开头。

#### 添加版本

3.0.0

#### 参数

1.  `[string='']` _(string)_: 要检索的字符串。
2.  `[target]` _(string)_: 要检查的字符串。
3.  `[position=0]` _(number)_: 检索的位置。

#### 返回

_(boolean)_: 如果`string`以 `target`，那么返回`true`，否则返回 `false` 。

#### 例子

```js
_.startsWith('abc', 'a');
// => true
 
_.startsWith('abc', 'b');
// => false
 
_.startsWith('abc', 'b', 1);
// => true

```