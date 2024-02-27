### `_.xorWith([arrays], [comparator])`[​](#_xorwitharrays-comparator "_xorwitharrays-comparator的直接链接")

该方法是像[`_.xor`](#xor)，除了它接受一个 `comparator` ，以调用比较数组的元素。 comparator 调用2个参数：_(arrVal, othVal)_.

#### 添加版本

4.0.0

#### 参数

1.  `[arrays]` _(...Array)_: 要检查的数组。
2.  `[comparator]` _(Function)_: 调用每一个元素的比较函数。

#### 返回

_(Array)_: 返回过滤值后的新数组。

#### 例子

```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.xorWith(objects, others, _.isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]

```