### `_.lt(value, other)`[​](#_ltvalue-other "_ltvalue-other的直接链接")

检查 `value` 是否小于 `other`。

#### 添加版本

3.9.0

#### 参数

1.  `value` _(\*)_: 用来比较的值。
2.  `other` _(\*)_: 另一个用来比较的值。

#### 返回

_(boolean)_: 如果`value` 小于 `other` 返回 `true`，否则返回 `false`。

#### 例子

```js
_.lt(1, 3);
// => true
 
_.lt(3, 3);
// => false
 
_.lt(3, 1);
// => false


```