### `_.pull(array, [values])`[​](#_pullarray-values "_pullarray-values的直接链接")

移除数组`array`中所有和给定值相等的元素，使用[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) 进行全等比较。  
  
**注意：** 和[`_.without`](#without) 方法不同，这个方法会改变数组。使用[`_.remove`](#remove) 从一个数组中移除元素。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要修改的数组。
2.  `[values]` _(...\*)_: 要删除的值。

#### 返回值

_(Array)_: 返回 `array`.

#### 例子

```js
var array = [1, 2, 3, 1, 2, 3];
 
_.pull(array, 2, 3);
console.log(array);
// => [1, 1]

```