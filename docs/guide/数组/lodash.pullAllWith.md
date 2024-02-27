### `_.pullAllWith(array, values, [comparator])`[​](#_pullallwitharray-values-comparator "_pullallwitharray-values-comparator的直接链接")

这个方法类似于[`_.pullAll`](#pullAll)，区别是这个方法接受 `comparator` 调用`array`中的元素和`values`比较。comparator 会传入两个参数：_(arrVal, othVal)_。  
  
**注意:** 和[`_.differenceWith`](#differenceWith) 不同, 这个方法会改变数组 `array`。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要修改的数组。
2.  `values` _(Array)_: 要移除值的数组。
3.  `[comparator]` _(Function)_: comparator（比较器）调用每个元素。

#### 返回值

_(Array)_: 返回 `array`。

#### 例子

```js
var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 
_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
```