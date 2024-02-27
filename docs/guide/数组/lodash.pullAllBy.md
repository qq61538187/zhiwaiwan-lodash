### `_.pullAllBy(array, values, [iteratee=_.identity])`[​](#_pullallbyarray-values-iteratee_identity "_pullallbyarray-values-iteratee_identity的直接链接")

这个方法类似于[`_.pullAll`](#pullAll) ，区别是这个方法接受一个 `iteratee`（迭代函数） 调用 `array` 和 `values`的每个值以产生一个值，通过产生的值进行了比较。iteratee 会传入一个参数： _(value)_。  
  
**Note:** 不同于[`_.differenceBy`](#differenceBy), 这个方法会改变数组 `array`。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要修改的数组。
2.  `values` _(Array)_: 要移除值的数组。
3.  `[iteratee=_.identity]` _(Array|Function|Object|string)_: iteratee（迭代器）调用每个元素。

#### 返回值

_(Array)_: 返回 `array`.

#### 例子

```js

var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]

```