### `_.reverse(array)`[​](#_reversearray "_reversearray的直接链接")

反转`array`，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。  
  
**Note:** 这个方法会改变原数组 `array`，基于[`Array#reverse`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse).

#### 添加版本

4.0.0

#### 参数

1.  `array` _(Array)_: 要修改的数组。

#### 返回

_(Array)_: 返回 `array`.

#### 例子

```js

var array = [1, 2, 3];
 
_.reverse(array);
// => [3, 2, 1]
 
console.log(array);
// => [3, 2, 1]

```