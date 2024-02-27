### `_.toFinite(value)`[​](#_tofinitevalue "_tofinitevalue的直接链接")

转换 `value` 为一个有限数字。

#### 添加版本

4.12.0

#### 参数

1.  `value` _(\*)_: 要转换的值。

#### 返回

_(number)_: 返回转换后的数字。

#### 例子

```js
_.toFinite(3.2);
// => 3.2
 
_.toFinite(Number.MIN_VALUE);
// => 5e-324
 
_.toFinite(Infinity);
// => 1.7976931348623157e+308
 
_.toFinite('3.2');
// => 3.2

```