### `_.isSafeInteger(value)`[​](#_issafeintegervalue "_issafeintegervalue的直接链接")

检查 `value` 是否是一个安全整数。 一个安全整数应该是符合 IEEE-754 标准的非双精度浮点数。  
  
**注意:** 这个方法基于[`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 为一个安全整数，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isSafeInteger(3);
// => true
 
_.isSafeInteger(Number.MIN_VALUE);
// => false
 
_.isSafeInteger(Infinity);
// => false
 
_.isSafeInteger('3');
// => false

```