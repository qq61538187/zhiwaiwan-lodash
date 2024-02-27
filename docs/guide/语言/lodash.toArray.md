### `_.toArray(value)`[​](#_toarrayvalue "_toarrayvalue的直接链接")

转换 `value` 为一个数组。

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 要转换的值。

#### 返回

_(Array)_: 返回转换后的数组。

#### 例子

```js
_.toArray({ 'a': 1, 'b': 2 });
// => [1, 2]
 
_.toArray('abc');
// => ['a', 'b', 'c']
 
_.toArray(1);
// => []
 
_.toArray(null);
// => []

```