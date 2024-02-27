### `_.sortedUniq(array)`[​](#_sorteduniqarray "_sorteduniqarray的直接链接")

这个方法类似[`_.uniq`](#uniq)，除了它会优化排序数组。

#### 添加版本

4.0.0

#### 参数

1.  `array` _(Array)_: 要检查的数组。

#### 返回

_(Array)_: 返回一个新的不重复的数组。

#### 例子

```js

_.sortedUniq([1, 1, 2]);
// => [1, 2]


```