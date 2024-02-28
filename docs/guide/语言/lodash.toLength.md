### `_.toLength(value)`[​](#_tolengthvalue "_tolengthvalue的直接链接")

转换 `value` 为用作类数组对象的长度整数。  
  
**注意:** 这个方法基于[`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要转换的值。

#### 返回

_(number)_: 返回转换后的整数。

#### 例子


```js
_.toLength(3.2);
// => 3
 
_.toLength(Number.MIN_VALUE);
// => 0
 
_.toLength(Infinity);
// => 4294967295
 
_.toLength('3.2');
// => 3

```