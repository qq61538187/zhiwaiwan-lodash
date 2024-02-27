### `_.toSafeInteger(value)`[​](#_tosafeintegervalue "_tosafeintegervalue的直接链接")

转换 `value` 为安全整数。 安全整数可以用于比较和准确的表示。

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要转换的值。

#### 返回

_(number)_: 返回转换后的整数。

#### 例子

```js
_.toSafeInteger(3.2);
// => 3
 
_.toSafeInteger(Number.MIN_VALUE);
// => 0
 
_.toSafeInteger(Infinity);
// => 9007199254740991
 
_.toSafeInteger('3.2');
// => 3

```