### `_.intersectionWith([arrays], [comparator])`[​](#_intersectionwitharrays-comparator "_intersectionwitharrays-comparator的直接链接")

这个方法类似[`_.intersection`](#intersection)，区别是它接受一个 `comparator` 调用比较`arrays`中的元素。结果值是从第一数组中选择。comparator 会传入两个参数：_(arrVal, othVal)_。

#### 引入版本

1.0.1

#### 参数

1.  `[arrays]` _(...Array)_: 待检查的数组。
2.  `[comparator]` _(Function)_: comparator（比较器）调用每个元素。

#### 返回值

_(Array)_: 返回一个包含所有传入数组交集元素的新数组。

#### 例子

```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.intersectionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }]

```