### `_.overArgs(func, [transforms=[_.identity]])`[​](#_overargsfunc-transforms_identity "_overargsfunc-transforms_identity的直接链接")

创建一个函数，调用`func`时参数为相对应的`transforms`的返回值。

#### 添加版本

4.0.0

#### 参数

1.  `func` _(Function)_:要包裹的函数。

#### 返回

_(Function)_: 返回新函数。

#### 例子

```js
function doubled(n) {
  return n * 2;
}
 
function square(n) {
  return n * n;
}
 
var func = _.overArgs(function(x, y) {
  return [x, y];
}, [square, doubled]);
 
func(9, 3);
// => [81, 6]
 
func(10, 5);
// => [100, 10]

```