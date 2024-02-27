### `_.isArguments(value)`[​](#_isargumentsvalue "_isargumentsvalue的直接链接")

检查 `value` 是否是一个类 `arguments` 对象。

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果`value`是一个 `arguments` 对象 返回 `true`，否则返回 `false`。

#### 例子

```js
_.isArguments(function() { return arguments; }());
// => true
 
_.isArguments([1, 2, 3]);
// => false

```