### `_.spread(func, [start=0])`[​](#_spreadfunc-start0 "_spreadfunc-start0的直接链接")

创建一个函数，调用`func`时，`this`绑定到创建的新函数，把参数作为数组传入，类似于[`Function#apply`](http://www.ecma-international.org/ecma-262/6.0/#sec-function.prototype.apply).  
  
**Note:** 这个方法基于[spread operator](https://mdn.io/spread_operator).

#### 添加版本

3.2.0

#### 参数

1.  `func` _(Function)_: 要应用传播参数的函数。
2.  `[start=0]` _(number)_: spread 参数的开始位置.

#### 返回

_(Function)_: 返回新的函数。

#### 例子

```js
var say = _.spread(function(who, what) {
  return who + ' says ' + what;
});
 
say(['fred', 'hello']);
// => 'fred says hello'
 
var numbers = Promise.all([
  Promise.resolve(40),
  Promise.resolve(36)
]);
 
numbers.then(_.spread(function(x, y) {
  return x + y;
}));
// => a Promise of 76

```