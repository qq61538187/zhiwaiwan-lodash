### `_.forEachRight(collection, [iteratee=_.identity])`[​](#_foreachrightcollection-iteratee_identity "_foreachrightcollection-iteratee_identity的直接链接")

这个方法类似[`_.forEach`](#forEach)，不同之处在于，[`_.forEachRight`](#forEachRight) 是从右到左遍历集合中每一个元素的。

#### 添加版本

2.0.0

#### 别名

_\_.eachRight_

#### 参数

1.  `collection` _(Array|Object)_: 一个用来迭代的集合。
2.  `[iteratee=_.identity]` _(Function)_: 每次迭代调用的函数。

#### 返回

_(\*)_: 返回集合 `collection`。

#### 例子

```js
_.forEachRight([1, 2], function(value) {
  console.log(value);
});
// => Logs `2` then `1`.

```