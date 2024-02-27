### `_.shuffle(collection)`[​](#_shufflecollection "_shufflecollection的直接链接")

创建一个被打乱值的集合。 使用[Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle) 版本。

#### 添加版本

0.1.0

#### 参数

1.  `collection` _(Array|Object)_: 要打乱的集合。

#### 返回

_(Array)_: 返回打乱的新数组。

#### 例子

```js

_.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]

```