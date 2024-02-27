### `_.isDate(value)`[​](#_isdatevalue "_isdatevalue的直接链接")

检查 `value` 是否是 `Date` 对象。

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 是一个日期对象，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isDate(new Date); 
// => true
 
_.isDate('Mon April 23 2012');
// => false

```