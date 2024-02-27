### `_.flowRight([funcs])`[​](#_flowrightfuncs "_flowrightfuncs的直接链接")

这个方法类似[`_.flow`](#flow)，除了它调用函数的顺序是从右往左的。

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
 
var addSquare = _.flowRight([square, _.add]);
addSquare(1, 2);
// => 9

```