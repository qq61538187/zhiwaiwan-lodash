### `_.flow([funcs])`[​](#_flowfuncs "_flowfuncs的直接链接")

创建一个函数。 返回的结果是调用提供函数的结果，`this` 会绑定到创建函数。 每一个连续调用，传入的参数都是前一个函数返回的结果。

#### 添加版本

3.0.0

#### 参数

1.  `[funcs]` _(...(Function|Function\[\]))_: 要调用的函数。

#### 返回

_(Function)_: 返回新的函数。

#### 例子

```js
function square(n) {
  return n * n;
}
 
var addSquare = _.flow([_.add, square]);
addSquare(1, 2);
// => 9

```