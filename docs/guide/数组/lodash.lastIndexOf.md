### `_.lastIndexOf(array, value, [fromIndex=array.length-1])`[​](#_lastindexofarray-value-fromindexarraylength-1 "_lastindexofarray-value-fromindexarraylength-1的直接链接")

这个方法类似[`_.indexOf`](#indexOf) ，区别是它是从右到左遍历`array`的元素。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要搜索的数组。
2.  `value` _(\*)_: 要搜索的值。
3.  `[fromIndex=array.length-1]` _(number)_: 开始搜索的索引值。

#### 返回值

_(number)_: 返回匹配值的索引值，否则返回 `-1`。

#### 例子

```js
_.lastIndexOf([1, 2, 1, 2], 2);
// => 3
 
// Search from the `fromIndex`.
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1

```