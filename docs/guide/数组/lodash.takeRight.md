### `_.takeRight(array, [n=1])`[​](#_takerightarray-n1 "_takerightarray-n1的直接链接")

创建一个数组切片，从`array`数组的最后一个元素开始提取`n`个元素。

#### 添加版本

3.0.0

#### 参数

1.  `array` _(Array)_: 要检索的数组。
2.  `[n=1]` _(number)_: 要提取的元素个数。

#### 返回

_(Array)_: 返回 `array` 数组的切片（从结尾元素开始`n`个元素）。

#### 例子

```js
_.takeRight([1, 2, 3]);
// => [3]
 
_.takeRight([1, 2, 3], 2);
// => [2, 3]
 
_.takeRight([1, 2, 3], 5);
// => [1, 2, 3]
 
_.takeRight([1, 2, 3], 0);
// => []

```