### `_.indexOf(array, value, [fromIndex=0])`[​](#_indexofarray-value-fromindex0 "_indexofarray-value-fromindex0的直接链接")

使用[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) 等值比较，返回首次 `value` 在数组`array`中被找到的 索引值， 如果 `fromIndex` 为负值，将从数组`array`尾端索引进行匹配。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 需要查找的数组。
2.  `value` _(\*)_: 需要查找的值。
3.  `[fromIndex=0]` _(number)_: 开始查询的位置。

#### 返回值

_(number)_: 返回 值`value`在数组中的索引位置, 没有找到为返回`-1`。

#### 例子

```js
_.indexOf([1, 2, 1, 2], 2);
// => 1
 
// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3

```