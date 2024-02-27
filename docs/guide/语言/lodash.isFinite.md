### `_.isFinite(value)`[​](#_isfinitevalue "_isfinitevalue的直接链接")

检查 `value` 是否是原始有限数值。  
  
\*\* 注意:\*\* 这个方法基于[`Number.isFinite`](https://mdn.io/Number/isFinite).

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 是一个有限数值，那么返回 `true`，否则返回 `false`。

#### 例子


```js
_.isFinite(3);
// => true
 
_.isFinite(Number.MIN_VALUE);
// => true
 
_.isFinite(Infinity);
// => false
 
_.isFinite('3');
// => false

```