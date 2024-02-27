### `_.remove(array, [predicate=_.identity])`[​](#_removearray-predicate_identity "_removearray-predicate_identity的直接链接")

移除数组中`predicate`（断言）返回为真值的所有元素，并返回移除元素组成的数组。`predicate`（断言） 会传入3个参数： _(value, index, array)_。  
  
**Note:** 和[`_.filter`](#filter)不同, 这个方法会改变数组 `array`。使用[`_.pull`](#pull)来根据提供的`value`值从数组中移除元素。

#### 添加版本

2.0.0

#### 参数

1.  `array` _(Array)_: 要修改的数组。
2.  `[predicate=_.identity]` _(Array|Function|Object|string)_: 每次迭代调用的函数。

#### 返回

_(Array)_: 返回移除元素组成的新数组。

#### 例子


```js
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]

```