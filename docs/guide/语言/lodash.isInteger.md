### `_.isInteger(value)`[​](#_isintegervalue "_isintegervalue的直接链接")

检查 `value` 是否为一个整数。  
  
**注意:** 这个方法基于[`Number.isInteger`](https://mdn.io/Number/isInteger).

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 是一个整数，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isInteger(3);
// => true
 
_.isInteger(Number.MIN_VALUE);
// => false
 
_.isInteger(Infinity);
// => false
 
_.isInteger('3');
// => false

```