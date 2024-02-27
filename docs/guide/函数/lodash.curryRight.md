### `_.curryRight(func, [arity=func.length])`[​](#_curryrightfunc-arityfunclength "_curryrightfunc-arityfunclength的直接链接")

这个方法类似[`_.curry`](#curry)。 除了它接受参数的方式用[`_.partialRight`](#partialRight) 代替了[`_.partial`](#partial)。  
  
`_.curryRight.placeholder`值，默认是以 `_` 作为附加部分参数的占位符。  
  
**Note:** 这个方法不会设置 curried 函数的 "length" 属性。

#### 添加版本

3.0.0

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
 
var curried = _.curryRight(abc);
 
curried(3)(2)(1);
// => [1, 2, 3]
 
curried(2, 3)(1);
// => [1, 2, 3]
 
curried(1, 2, 3);
// => [1, 2, 3]
 
// Curried with placeholders.
curried(3)(1, _)(2);
// => [1, 2, 3]


```