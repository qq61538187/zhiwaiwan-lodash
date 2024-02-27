### `_.unzipWith(array, [iteratee=_.identity])`[​](#_unzipwitharray-iteratee_identity "_unzipwitharray-iteratee_identity的直接链接")

此方法类似于[`_.unzip`](#unzip)，除了它接受一个`iteratee`指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值： _(...group)_。

#### 添加版本

3.8.0

#### 参数

1.  `array` _(Array)_: 要处理的分组元素数组。
2.  `[iteratee=_.identity]` _(Function)_: 这个函数用来组合重组的值。

#### 返回

_(Array)_: 返回重组元素的新数组。

#### 例子


```js
var zipped = _.zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]
 
_.unzipWith(zipped, _.add);
// => [3, 30, 300]
```