### `_.reduceRight(collection, [iteratee=_.identity], [accumulator])`[​](#_reducerightcollection-iteratee_identity-accumulator "_reducerightcollection-iteratee_identity-accumulator的直接链接")

这个方法类似[`_.reduce`](#reduce) ，除了它是从右到左遍历`collection`（集合）中的元素的。

#### 添加版本

0.1.0

#### 参数

1.  `collection` _(Array|Object)_: 用来迭代的集合。
2.  `[iteratee=_.identity]` _(Function)_: 每次迭代调用的函数。
3.  `[accumulator]` _(\*)_: 初始值。

#### 返回

_(\*)_: 返回累加后的值。

#### 例子

```js
var array = [[0, 1], [2, 3], [4, 5]];
 
_.reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
// => [4, 5, 2, 3, 0, 1]

```