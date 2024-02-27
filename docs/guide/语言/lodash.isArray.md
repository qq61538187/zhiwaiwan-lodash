### `_.isArray(value)`[​](#_isarrayvalue "_isarrayvalue的直接链接")

检查 `value` 是否是 `Array` 类对象。

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果`value`是一个数组返回 `true`，否则返回 `false`。

#### 例子


```js
_.isArray([1, 2, 3]);
// => true
 
_.isArray(document.body.children);
// => false
 
_.isArray('abc');
// => false
 
_.isArray(_.noop);
// => false

```