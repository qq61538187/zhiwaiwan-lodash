### `_.isNil(value)`[​](#_isnilvalue "_isnilvalue的直接链接")

检查 `value` 是否是 `null` 或者 `undefined`。

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 为`null` 或 `undefined`，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isNil(null);
// => true
 
_.isNil(void 0);
// => true
 
_.isNil(NaN);
// => false

```