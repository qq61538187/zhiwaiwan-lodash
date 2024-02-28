### `_.bind(func, thisArg, [partials])`[​](#_bindfunc-thisarg-partials "_bindfunc-thisarg-partials的直接链接")

创建一个调用`func`的函数，`thisArg`绑定`func`函数中的 `this` (注：`this`的上下文为`thisArg`) ，并且`func`函数会接收`partials`附加参数。  
  
`_.bind.placeholder`值，默认是以 `_` 作为附加部分参数的占位符。  
  
**注意:** 不同于原生的 `Function#bind`，这个方法不会设置绑定函数的 "length" 属性。

#### 添加版本

0.1.0

#### 参数

1.  `func` _(Function)_: 绑定的函数。
2.  `thisArg` _(\*)_: `func` 绑定的`this`对象。
3.  `[partials]` _(...\*)_: 附加的部分参数。

#### 返回

_(Function)_: 返回新的绑定函数。

#### 例子

```js
var greet = function(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
};
 
var object = { 'user': 'fred' };
 
var bound = _.bind(greet, object, 'hi');
bound('!');
// => 'hi fred!'
 
// Bound with placeholders.
var bound = _.bind(greet, object, _, '!');
bound('hi');
// => 'hi fred!'

```