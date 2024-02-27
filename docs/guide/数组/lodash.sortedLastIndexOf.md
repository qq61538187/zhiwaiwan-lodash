### `_.sortedLastIndexOf(array, value)`[​](#_sortedlastindexofarray-value "_sortedlastindexofarray-value的直接链接")

这个方法类似[`_.lastIndexOf`](#lastIndexOf)，除了它是在已经排序的数组`array`上执行二进制检索。

#### 添加版本

4.0.0

#### 参数

1.  `array` _(Array)_: 要搜索的数组。
2.  `value` _(\*)_: 搜索的值。

#### 返回

_(number)_: 返回匹配值的索引位置，否则返回 `-1`。

#### 例子

```js
_.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
// => 3

```