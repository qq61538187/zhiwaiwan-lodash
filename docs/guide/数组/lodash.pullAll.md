### `_.pullAll(array, values)`[​](#_pullallarray-values "_pullallarray-values的直接链接")

这个方法类似[`_.pull`](#pull)，区别是这个方法接收一个要移除值的数组。  
  
**Note:** 不同于[`_.difference`](#difference), 这个方法会改变数组 `array`。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要修改的数组。
2.  `values` _(Array)_: 要移除值的数组。

#### 返回值

_(Array)_: 返回 `array`。

#### 例子

```js
var array = [1, 2, 3, 1, 2, 3];
 
_.pullAll(array, [2, 3]);
console.log(array);
// => [1, 1]

```