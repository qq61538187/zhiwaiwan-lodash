### `_.zipWith([arrays], [iteratee=_.identity])`[​](#_zipwitharrays-iteratee_identity "_zipwitharrays-iteratee_identity的直接链接")

这个方法类似于[`_.zip`](#zip)，不同之处在于它接受一个 `iteratee`（迭代函数），来 指定分组的值应该如何被组合。 该iteratee调用每个组的元素： _(...group)_.

#### 添加版本

3.8.0

#### 参数

1.  `[arrays]` _(...Array)_: 要处理的数组。
2.  `[iteratee=_.identity]` _(Function)_: 函数用来组合分组的值。

#### 返回

_(Array)_: 返回分组元素的新数组。

#### 例子

 ```js
_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c;
});
// => [111, 222]

 ```