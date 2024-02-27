### `_.flatMapDepth(collection, [iteratee=_.identity], [depth=1])`[​](#_flatmapdepthcollection-iteratee_identity-depth1 "_flatmapdepthcollection-iteratee_identity-depth1的直接链接")

该方法类似[`_.flatMap`](#flatMap)，不同之处在于，[`_.flatMapDepth`](#flatMapDepth) 会根据指定的 `depth`（递归深度）继续扁平化递归映射结果。

#### 添加版本

4.7.0

#### 参数

1.  `collection` _(Array|Object)_: 一个用来迭代的集合。
2.  `[iteratee=_.identity]` _(Array|Function|Object|string)_: 每次迭代调用的函数。
3.  `[depth=1]` _(number)_: 最大递归深度。

#### 返回

_(Array)_: 返回新扁平化数组。

#### 例子

```js
function duplicate(n) {
  return [[[n, n]]];
}
 
_.flatMapDepth([1, 2], duplicate, 2);
// => [[1, 1], [2, 2]]

```