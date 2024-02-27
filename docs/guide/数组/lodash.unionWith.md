### `_.unionWith([arrays], [comparator])`[​](#_unionwitharrays-comparator "_unionwitharrays-comparator的直接链接")

这个方法类似[`_.union`](#union)， 除了它接受一个 `comparator` 调用比较`arrays`数组的每一个元素。 comparator 调用时会传入2个参数： _(arrVal, othVal)_。

#### 添加版本

4.0.0

#### 参数

1.  `[arrays]` _(...Array)_: 要检查的数组。
2.  `[comparator]` _(Function)_: 比较函数，调用每个元素。

#### 返回

_(Array)_: 返回一个新的联合数组。

#### 例子

```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.unionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]

```