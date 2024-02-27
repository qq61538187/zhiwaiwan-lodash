### `_.xorBy([arrays], [iteratee=_.identity])`[​](#_xorbyarrays-iteratee_identity "_xorbyarrays-iteratee_identity的直接链接")

这个方法类似[`_.xor`](#xor) ，除了它接受 `iteratee`（迭代器），这个迭代器 调用每一个 `arrays`（数组）的每一个值，以生成比较的新值。iteratee 调用一个参数：_(value)_.

#### 添加版本

4.0.0

#### 参数

1.  `[arrays]` _(...Array)_: 要检查的数组。
2.  `[iteratee=_.identity]` _(Array|Function|Object|string)_: 调用每一个元素的迭代函数。

#### 返回

_(Array)_: 返回过滤值后的新数组。

#### 例子

```js
_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2, 3.4]
 
// The `_.property` iteratee shorthand.
_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```