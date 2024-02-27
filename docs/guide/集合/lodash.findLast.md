### `_.findLast(collection, [predicate=_.identity], [fromIndex=collection.length-1])`[​](#_findlastcollection-predicate_identity-fromindexcollectionlength-1 "_findlastcollection-predicate_identity-fromindexcollectionlength-1的直接链接")

这个方法类似[`_.find`](#find) ，不同之处在于，[`_.findLast`](#findLast)是从右至左遍历`collection` （集合）元素的。

#### 添加版本

2.0.0

#### 参数

1.  `collection` _(Array|Object)_: 一个用来迭代的集合。
2.  `[predicate=_.identity]` _(Array|Function|Object|string)_: 每次迭代调用的函数。
3.  `[fromIndex=collection.length-1]` _(number)_: 开始搜索的索引位置。

#### 返回

_(\*)_: 返回匹配元素，否则返回 `undefined`。

#### 例子

```js
_.findLast([1, 2, 3, 4], function(n) {
  return n % 2 == 1;
});
// => 3

```