### `_.wrap(value, [wrapper=identity])`[​](#_wrapvalue-wrapperidentity "_wrapvalue-wrapperidentity的直接链接")

创建一个函数。提供的 `value` 包装在 wrapper 函数的第一个参数里。 任何附加的参数都提供给 wrapper 函数。 被调用时 `this` 绑定在创建的函数上。

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 要包装的值。
2.  `[wrapper=identity]` _(Function)_: 包装函数。

#### 返回

_(Function)_: 返回新的函数。

#### 例子

```js
var p = _.wrap(_.escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});
 
p('fred, barney, & pebbles');
// => '<p>fred, barney, & pebbles</p>'

```