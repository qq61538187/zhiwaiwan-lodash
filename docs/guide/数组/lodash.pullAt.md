### `_.pullAt(array, [indexes])`[​](#_pullatarray-indexes "_pullatarray-indexes的直接链接")

根据索引 `indexes`，移除`array`中对应的元素，并返回被移除元素的数组。  
  
**Note:** 和[`_.at`](#at)不同, 这个方法会改变数组 `array`。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要修改的数组。
2.  `[indexes]` _(...(number|number\[\]))_: 要移除元素的索引。

#### 返回值

_(Array)_: 返回移除元素组成的新数组。

#### 例子

```js

var array = [5, 10, 15, 20];
var evens = _.pullAt(array, 1, 3);
 
console.log(array);
// => [5, 15]
 
console.log(evens);
// => [10, 20]

```