### `_.inRange(number, [start=0], end)`[​](#_inrangenumber-start0-end "_inrangenumber-start0-end的直接链接")

检查 `n` 是否在 `start` 与 `end` 之间，但不包括 `end`。 如果 `end` 没有指定，那么 `start` 设置为`0`。 如果 `start` 大于 `end`，那么参数会交换以便支持负范围。

#### 添加版本

3.3.0

#### 参数

1.  `number` _(number)_: 要检查的值。
2.  `[start=0]` _(number)_: 开始范围。
3.  `end` _(number)_: 结束范围。

#### 返回

_(boolean)_: 如果`number`在范围内 ，那么返回`true`，否则返回 `false`。

#### 例子

```js
_.inRange(3, 2, 4);
// => true
 
_.inRange(4, 8);
// => true
 
_.inRange(4, 2);
// => false
 
_.inRange(2, 2);
// => false
 
_.inRange(1.2, 2);
// => true
 
_.inRange(5.2, 4);
// => false
 
_.inRange(-3, -2, -6);
// => true

```