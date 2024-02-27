### `_.toNumber(value)`[​](#_tonumbervalue "_tonumbervalue的直接链接")

转换 `value` 为一个数字。

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要处理的值。

#### 返回

_(number)_: 返回数字。

#### 例子

```js
_.toNumber(3.2);
// => 3.2
 
_.toNumber(Number.MIN_VALUE);
// => 5e-324
 
_.toNumber(Infinity);
// => Infinity
 
_.toNumber('3.2');
// => 3.2

```