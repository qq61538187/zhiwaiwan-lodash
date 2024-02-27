### `_.gte(value, other)`[​](#_gtevalue-other "_gtevalue-other的直接链接")

检查 `value`是否大于或者等于 `other`。

#### 添加版本

3.9.0

#### 参数

1.  `value` _(\*)_: 要比较的值。
2.  `other` _(\*)_: 另一个要比较的值。

#### 返回

_(boolean)_: 如果`value` 大于或者等于 `other` 返回 `true`，否则返回 `false`。

#### 例子

```js
_.gte(3, 1);
// => true
 
_.gte(3, 3);
// => true
 
_.gte(1, 3);
// => false

```