### `_.constant(value)`[​](#_constantvalue "_constantvalue的直接链接")

创建一个返回 `value` 的函数。

#### 添加版本

2.4.0

#### 参数

1.  `value` _(\*)_: 要新函数返回的值。

#### 返回

_(Function)_: 返回新的常量函数。

#### 例子


```js
var objects = _.times(2, _.constant({ 'a': 1 }));
 
console.log(objects);
// => [{ 'a': 1 }, { 'a': 1 }]
 
console.log(objects[0] === objects[1]);
// => true

```