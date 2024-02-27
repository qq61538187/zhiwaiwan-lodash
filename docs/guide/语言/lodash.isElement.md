### `_.isElement(value)`[​](#_iselementvalue "_iselementvalue的直接链接")

检查 `value` 是否是可能是 DOM 元素。

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 是一个DOM元素，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isElement(document.body);
// => true
 
_.isElement('<body>');
// => false

```