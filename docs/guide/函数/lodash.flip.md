### `_.flip(func)`[​](#_flipfunc "_flipfunc的直接链接")

创建一个函数，调用`func`时候接收翻转的参数。

#### 添加版本

4.0.0

#### 参数

1.  `func` _(Function)_: 要翻转参数的函数。

#### 返回

_(Function)_: 返回新的函数。

#### 例子

```js
var flipped = _.flip(function() {
  return _.toArray(arguments);
});
 
flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']

```