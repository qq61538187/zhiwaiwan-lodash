### `_.uniqWith(array, [comparator])`[​](#_uniqwitharray-comparator "_uniqwitharray-comparator的直接链接")

这个方法类似[`_.uniq`](#uniq)， 除了它接受一个 `comparator` 调用比较`arrays`数组的每一个元素。 comparator 调用时会传入2个参数： _(arrVal, othVal)_。

#### 添加版本

4.0.0

#### 参数

1.  `array` _(Array)_: 要检查的数组。
2.  `[comparator]` _(Function)_: 比较函数，调用每个元素。

#### 返回

_(Array)_: 返回新的去重后的数组。

#### 例子

```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.uniqWith(objects, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```