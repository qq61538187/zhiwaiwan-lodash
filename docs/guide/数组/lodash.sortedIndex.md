### `_.sortedIndex(array, value)`[​](#_sortedindexarray-value "_sortedindexarray-value的直接链接")

使用二进制的方式检索来决定 `value`值 应该插入到数组中 尽可能小的索引位置，以保证`array`的排序。

#### 添加版本

0.1.0

#### 参数

1.  `array` _(Array)_: 要检查的排序数组。
2.  `value` _(\*)_: 要评估的值。

#### 返回

_(number)_: 返回 `value`值 应该在数组`array`中插入的索引位置 index。

#### 例子

```js
_.sortedIndex([30, 50], 40);
// => 1

```