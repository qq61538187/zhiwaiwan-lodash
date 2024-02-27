### `_.isArrayLike(value)`[​](#_isarraylikevalue "_isarraylikevalue的直接链接")

检查 `value` 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且`value.length`是个整数，大于等于 `0`，小于或等于 `Number.MAX_SAFE_INTEGER`。

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果`value`是一个类数组，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isArrayLike([1, 2, 3]);
// => true
 
_.isArrayLike(document.body.children);
// => true
 
_.isArrayLike('abc');
// => true
 
_.isArrayLike(_.noop);
// => false

```