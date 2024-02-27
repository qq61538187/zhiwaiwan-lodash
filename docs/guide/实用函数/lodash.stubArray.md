### `_.stubArray()`[​](#_stubarray "_stubarray的直接链接")

这个方法返回一个新的空数组。

#### 添加版本

4.13.0

#### 返回

_(Array)_: 返回新的空数组。

#### 例子

 ```js
var arrays = _.times(2, _.stubArray);
 
console.log(arrays);
// => [[], []]
 
console.log(arrays[0] === arrays[1]);
// => false

 ```