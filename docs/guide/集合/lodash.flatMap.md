### `_.flatMap(collection, [iteratee=_.identity])`[​](#_flatmapcollection-iteratee_identity "_flatmapcollection-iteratee_identity的直接链接")

创建一个扁平化（注：同阶数组）的数组，这个数组的值来自`collection`（集合）中的每一个值经过 `iteratee`（迭代函数） 处理后返回的结果，并且扁平化合并。 iteratee 调用三个参数： _(value, index|key, collection)_。

#### 添加版本

4.0.0

#### 参数

1.  `collection` _(Array|Object)_: 一个用来迭代遍历的集合。
2.  `[iteratee=_.identity]` _(Array|Function|Object|string)_: 每次迭代调用的函数。

#### 返回

_(Array)_: 返回新扁平化数组。

#### 例子

```js
function duplicate(n) {
  return [n, n];
}
 
_.flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]

```