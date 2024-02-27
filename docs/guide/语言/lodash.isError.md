### `_.isError(value)`[​](#_iserrorvalue "_iserrorvalue的直接链接")

检查 `value` 是否是 `Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, 或者 `URIError`对象。

#### 添加版本

3.0.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 是一个错误（Error）对象，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isError(new Error);
// => true
 
_.isError(Error);
// => false

```