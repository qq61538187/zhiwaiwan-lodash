### `_.flatMapDeep(collection, [iteratee=_.identity])`[​](#_flatmapdeepcollection-iteratee_identity "_flatmapdeepcollection-iteratee_identity的直接链接")

这个方法类似[`_.flatMap`](#flatMap) 不同之处在于，[`_.flatMapDeep`](#flatMapDeep) 会继续扁平化递归映射的结果。

#### 添加版本

4.7.0

#### 参数

1.  `collection` _(Array|Object)_: 一个用来迭代的集合。
2.  `[iteratee=_.identity]` _(Array|Function|Object|string)_: 每次迭代调用的函数。

#### 返回

_(Array)_: 返回新扁平化数组。

#### 例子

```js
function duplicate(n) {
  return [[[n, n]]];
}
 
_.flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]

```