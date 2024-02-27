### `_.isLength(value)`[​](#_islengthvalue "_islengthvalue的直接链接")

检查 `value` 是否为有效的类数组长度。  
  
**注意:** 这个函数基于[`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 是一个有效长度，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isLength(3);
// => true
 
_.isLength(Number.MIN_VALUE);
// => false
 
_.isLength(Infinity);
// => false
 
_.isLength('3');
// => false


```