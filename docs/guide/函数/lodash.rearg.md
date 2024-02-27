### `_.rearg(func, indexes)`[​](#_reargfunc-indexes "_reargfunc-indexes的直接链接")

创建一个函数,调用`func`时，根据指定的 `indexes` 调整对应位置参数。其中第一个索引值是对应第一个参数，第二个索引值是作为第二个参数，依此类推。

#### 添加版本

3.0.0

#### 参数

1.  `func` _(Function)_: 待调用的函数。
2.  `indexes` _(...(number|number\[\]))_: 排列参数的位置。

#### 返回

_(Function)_: 返回新的函数。

#### 例子

```js
var rearged = _.rearg(function(a, b, c) {
  return [a, b, c];
}, [2, 0, 1]);
 
rearged('b', 'c', 'a')
// => ['a', 'b', 'c']

```