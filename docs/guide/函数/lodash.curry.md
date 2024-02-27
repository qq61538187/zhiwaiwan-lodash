### `_.curry(func, [arity=func.length])`[​](#_curryfunc-arityfunclength "_curryfunc-arityfunclength的直接链接")

创建一个函数，该函数接收 `func` 的参数，要么调用`func`返回的结果，如果 `func` 所需参数已经提供，则直接返回 `func` 所执行的结果。或返回一个函数，接受余下的`func` 参数的函数，可以使用 `func.length` 强制需要累积的参数个数。  
  
`_.curry.placeholder`值，默认是以 `_` 作为附加部分参数的占位符。  
  
**Note:** 这个方法不会设置 curried 函数的 "length" 属性。

#### 添加版本

2.0.0

#### 参数

1.  `func` _(Function)_: 用来柯里化（curry）的函数。
2.  `[arity=func.length]` _(number)_: 需要提供给 `func` 的参数数量。

#### 返回

_(Function)_: 返回新的柯里化（curry）函数。

#### 例子


```js

var abc = function(a, b, c) {
  return [a, b, c];
};
 
var curried = _.curry(abc);
 
curried(1)(2)(3);
// => [1, 2, 3]
 
curried(1, 2)(3);
// => [1, 2, 3]
 
curried(1, 2, 3);
// => [1, 2, 3]
 
// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]


```