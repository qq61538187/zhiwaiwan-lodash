### `_.maxBy(array, [iteratee=_.identity])`[​](#_maxbyarray-iteratee_identity "_maxbyarray-iteratee_identity的直接链接")

这个方法类似[`_.max`](#max) 除了它接受 `iteratee` 来调用 `array`中的每一个元素，来生成其值排序的标准。 iteratee 会调用1个参数: _(value)_ 。

#### 添加版本

4.0.0

#### 参数

1.  `array` _(Array)_: 要迭代的数组。
2.  `[iteratee=_.identity]` _(Function)_: 调用每个元素的迭代函数。

#### 返回

_(\*)_: 返回最大的值。

#### 例子

```js
var objects = [{ 'n': 1 }, { 'n': 2 }];
 
_.maxBy(objects, function(o) { return o.n; });
// => { 'n': 2 }
 
// The `_.property` iteratee shorthand.
_.maxBy(objects, 'n');
// => { 'n': 2 }

```