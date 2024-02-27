### `_.sortedIndexBy(array, value, [iteratee=_.identity])`[​](#_sortedindexbyarray-value-iteratee_identity "_sortedindexbyarray-value-iteratee_identity的直接链接")

这个方法类似[`_.sortedIndex`](#sortedIndex) ，除了它接受一个 `iteratee` （迭代函数），调用每一个数组（`array`）元素，返回结果和`value` 值比较来计算排序。iteratee 会传入一个参数：_(value)_。

#### 添加版本

4.0.0

#### 参数

1.  `array` _(Array)_: 要检查的排序数组。
2.  `value` _(\*)_: 要评估的值。
3.  `[iteratee=_.identity]` _(Array|Function|Object|string)_: 迭代函数，调用每个元素。

#### 返回

_(number)_: 返回 `value`值 应该在数组`array`中插入的索引位置 index。

#### 例子


```js

var objects = [{ 'x': 4 }, { 'x': 5 }];
 
_.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
// => 0
 
// The `_.property` iteratee shorthand.
_.sortedIndexBy(objects, { 'x': 4 }, 'x');
// => 0

```