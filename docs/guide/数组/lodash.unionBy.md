### `_.unionBy([arrays], [iteratee=_.identity])`[​](#_unionbyarrays-iteratee_identity "_unionbyarrays-iteratee_identity的直接链接")

这个方法类似[`_.union`](#union) ，除了它接受一个 `iteratee` （迭代函数），调用每一个数组（`array`）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：_(value)_。

#### 添加版本

4.0.0

#### 参数

1.  `[arrays]` _(...Array)_: 要检查的数组。
2.  `[iteratee=_.identity]` _(Array|Function|Object|string)_: 迭代函数，调用每个元素。

#### 返回

_(Array)_: 返回一个新的联合数组。

#### 例子

```js
_.unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
// The `_.property` iteratee shorthand.
_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]

```