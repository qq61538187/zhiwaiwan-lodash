### `_.sortedLastIndex(array, value)`[​](#_sortedlastindexarray-value "_sortedlastindexarray-value的直接链接")

此方法类似于[`_.sortedIndex`](#sortedIndex)，除了 它返回 `value`值 在 `array` 中尽可能大的索引位置（index）。

#### 添加版本

3.0.0

#### 参数

1.  `array` _(Array)_: 要检查的排序数组。
2.  `value` _(\*)_: 要评估的值。

#### 返回

_(number)_: 返回 `value`值 应该在数组`array`中插入的索引位置 index。

#### 例子


```js
_.sortedLastIndex([4, 5, 5, 5, 6], 5);
// => 4

```