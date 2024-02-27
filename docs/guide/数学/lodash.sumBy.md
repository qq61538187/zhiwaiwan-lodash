### `_.sumBy(array, [iteratee=_.identity])`[​](#_sumbyarray-iteratee_identity "_sumbyarray-iteratee_identity的直接链接")

这个方法类似[`_.summin`](#summin) 除了它接受 `iteratee` 来调用 `array`中的每一个元素，来生成其值排序的标准。 iteratee 会调用1个参数: _(value)_ 。

#### 添加版本

4.0.0

#### 参数

1.  `array` _(Array)_: 要迭代的数组。
2.  `[iteratee=_.identity]` _(Function)_: 调用每个元素的迭代函数。

#### 返回

_(number)_: 返回总和。

#### 例子

```js
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 
_.sumBy(objects, function(o) { return o.n; });
// => 20
 
// The `_.property` iteratee shorthand.
_.sumBy(objects, 'n');
// => 20

```