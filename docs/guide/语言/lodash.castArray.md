### `_.castArray(value)`[​](#_castarrayvalue "_castarrayvalue的直接链接")

如果 `value` 不是数组, 那么强制转为数组。

#### 添加版本

4.4.0

#### 参数

1.  `value` _(\*)_: 要处理的值。

#### 返回

_(Array)_: 返回转换后的数组。

#### 例子

```js
_.castArray(1);
// => [1]
 
_.castArray({ 'a': 1 });
// => [{ 'a': 1 }]
 
_.castArray('abc');
// => ['abc']
 
_.castArray(null);
// => [null]
 
_.castArray(undefined);
// => [undefined]
 
_.castArray();
// => []
 
var array = [1, 2, 3];
console.log(_.castArray(array) === array);
// => true

```