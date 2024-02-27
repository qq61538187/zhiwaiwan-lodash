### `_.meanBy(array, [iteratee=_.identity])`[​](#_meanbyarray-iteratee_identity "_meanbyarray-iteratee_identity的直接链接")

这个方法类似[`_.mean`](#mean)， 除了它接受 `iteratee` 来调用 `array`中的每一个元素，来生成其值排序的标准。 iteratee 会调用1个参数: _(value)_ 。

#### 添加版本

4.7.0

#### 参数

1.  `array` _(Array)_: 要迭代的数组。
2.  `[iteratee=_.identity]` _(Function)_: 调用每个元素的迭代函数。

#### 返回

_(number)_: 返回平均值。

#### 例子

```js
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 
_.meanBy(objects, function(o) { return o.n; });
// => 5
 
// The `_.property` iteratee shorthand.
_.meanBy(objects, 'n');
// => 5

```