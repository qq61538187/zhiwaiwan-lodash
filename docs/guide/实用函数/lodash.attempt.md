### `_.attempt(func, [args])`[​](#_attemptfunc-args "_attemptfunc-args的直接链接")

尝试调用`func`，返回结果 或者 捕捉错误对象。任何附加的参数都会在调用时传给`func`。

#### 添加版本

3.0.0

#### 参数

1.  `func` _(Function)_: 要尝试调用的函数。
2.  `[args]` _(...\*)_: 调用`func`时，传递的参数。

#### 返回

_(\*)_: 返回`func`结果或者错误对象。

#### 例子

```js
// Avoid throwing errors for invalid selectors.
var elements = _.attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
 
if (_.isError(elements)) {
  elements = [];
}

```