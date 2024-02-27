### `_.rest(func, [start=func.length-1])`[​](#_restfunc-startfunclength-1 "_restfunc-startfunclength-1的直接链接")

创建一个函数，调用`func`时，`this`绑定到创建的新函数，并且`start`之后的参数作为数组传入。  
  
**Note:** 这个方法基于[rest parameter](https://mdn.io/rest_parameters)。

#### 添加版本

4.0.0

#### 参数

1.  `func` _(Function)_: 要应用的函数。
2.  `[start=func.length-1]` _(number)_: rest 参数的开始位置。

#### 返回

_(Function)_: 返回新的函数。

#### 例子

```js

var say = _.rest(function(what, names) {
  return what + ' ' + _.initial(names).join(', ') +
    (_.size(names) > 1 ? ', & ' : '') + _.last(names);
});
say('hello', 'fred', 'barney', 'pebbles');
// => 'hello fred, barney, & pebbles'

```