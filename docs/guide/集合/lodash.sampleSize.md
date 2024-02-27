### `_.sampleSize(collection, [n=1])`[​](#_samplesizecollection-n1 "_samplesizecollection-n1的直接链接")

从`collection`（集合）中获得 `n` 个随机元素。

#### 添加版本

4.0.0

#### 参数

1.  `collection` _(Array|Object)_: 要取样的集合。
2.  `[n=1]` _(number)_: 取样的元素个数。

#### 返回

_(Array)_: 返回随机元素。

#### 例子

```js
_.sampleSize([1, 2, 3], 2);
// => [3, 1]
 
_.sampleSize([1, 2, 3], 4);
// => [2, 3, 1]

```