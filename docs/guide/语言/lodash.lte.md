### `_.lte(value, other)`[​](#_ltevalue-other "_ltevalue-other的直接链接")

检查 `value` 是否小于等于 `other`。

#### 添加版本

3.9.0

#### 参数

1.  `value` _(\*)_: 用来比较的值。
2.  `other` _(\*)_: 另一个用来比较的值。

#### 返回

_(boolean)_: 如果`value` 小于等于 `other` 返回 `true`，否则返回 `false`。

#### 例子

```js
_.lte(1, 3);
// => true
 
_.lte(3, 3);
// => true
 
_.lte(3, 1);
// => false

```