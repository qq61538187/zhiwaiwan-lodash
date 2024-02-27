### `_.delay(func, wait, [args])`[​](#_delayfunc-wait-args "_delayfunc-wait-args的直接链接")

延迟 `wait` 毫秒后调用 `func`。 调用时，任何附加的参数会传给`func`。

#### 添加版本

0.1.0

#### 参数

1.  `func` _(Function)_: 要延迟的函数。
2.  `wait` _(number)_: 要延迟的毫秒数。
3.  `[args]` _(...\*)_: 会在调用时传入到 `func` 的参数。

#### 返回

_(number)_: 返回计时器 id

#### 例子

```js
_.delay(function(text) {
  console.log(text);
}, 1000, 'later');
// => 一秒后输出 'later'。

```