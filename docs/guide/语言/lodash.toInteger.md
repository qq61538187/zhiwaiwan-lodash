### `_.toInteger(value)`[​](#_tointegervalue "_tointegervalue的直接链接")

转换 `value` 为一个整数。  
  
**注意:** 这个方法基于[`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要转换的值。

#### 返回

_(number)_: 返回转换后的整数。

#### 例子

```js
_.toInteger(3.2);
// => 3
 
_.toInteger(Number.MIN_VALUE);
// => 0
 
_.toInteger(Infinity);
// => 1.7976931348623157e+308
 
_.toInteger('3.2');
// => 3

```