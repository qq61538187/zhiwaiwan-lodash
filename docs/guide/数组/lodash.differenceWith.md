### `_.differenceWith(array, [values], [comparator])`[​](#_differencewitharray-values-comparator "_differencewitharray-values-comparator的直接链接")

这个方法类似[`_.difference`](#difference) ，除了它接受一个 `comparator` （注：比较器），它调用比较`array`，`values`中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：_(arrVal, othVal)_。  
  
**Note:** 不像[`_.pullAllWith`](#pullAllWith), 这个方法会返回一个新数组。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要检查的数组。
2.  `[values]` _(...Array)_: 排除的值。
3.  `[comparator]` _(Function)_: comparator 调用每个元素。

#### 返回值

_(Array)_: 返回一个过滤值后的新数组。

#### 例子

```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]

```