### `_.nth(array, [n=0])`[​](#_ntharray-n0 "_ntharray-n0的直接链接")

获取`array`数组的第n个元素。如果`n`为负数，则返回从数组结尾开始的第n个元素。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要查询的数组。
2.  `[n=0]` _(number)_: 要返回元素的索引值。

#### 返回值

_(\*)_: 获取`array`数组的第n个元素。

#### 例子

```js
var array = ['a', 'b', 'c', 'd'];
 
_.nth(array, 1);
// => 'b'
 
_.nth(array, -2);
// => 'c';

```