### `_.intersectionBy([arrays], [iteratee=_.identity])`[​](#_intersectionbyarrays-iteratee_identity "_intersectionbyarrays-iteratee_identity的直接链接")

这个方法类似[`_.intersection`](#intersection)，区别是它接受一个 `iteratee` 调用每一个`arrays`的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。iteratee 会传入一个参数：_(value)_。

#### 引入版本

1.0.1

#### 参数

1.  `[arrays]` _(...Array)_: 待检查的数组。
2.  `[iteratee=_.identity]` _(Array|Function|Object|string)_: iteratee（迭代器）调用每个元素。

#### 返回值

_(Array)_: 返回一个包含所有传入数组交集元素的新数组。

#### 例子

```js
_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1]
 
// The `_.property` iteratee shorthand.
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]

```