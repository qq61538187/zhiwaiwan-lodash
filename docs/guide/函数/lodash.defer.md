### `_.defer(func, [args])`[​](#_deferfunc-args "_deferfunc-args的直接链接")

推迟调用`func`，直到当前堆栈清理完毕。 调用时，任何附加的参数会传给`func`。

#### 添加版本

0.1.0

#### 参数

1.  `func` _(Function)_: 要延迟的函数。
2.  `[args]` _(...\*)_: 会在调用时传给 `func` 的参数。

#### 返回

_(number)_:返回计时器 id。

#### 例子

```js

_.defer(function(text) {
  console.log(text);
}, 'deferred');
// => 一毫秒或更久一些输出 'deferred'。


```