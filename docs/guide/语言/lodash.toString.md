### `_.toString(value)`[​](#_tostringvalue "_tostringvalue的直接链接")

转换 `value` 为字符串。 `null` 和 `undefined` 将返回空字符串。`-0` 将被转换为字符串`"-0"`。

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要处理的值。

#### 返回

_(string)_: 返回字符串。

#### 例子

```js
_.toString(null);
// => ''
 
_.toString(-0);
// => '-0'
 
_.toString([1, 2, 3]);
// => '1,2,3'

```