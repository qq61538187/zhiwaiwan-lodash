### `_.ary(func, [n=func.length])`[​](#_aryfunc-nfunclength "_aryfunc-nfunclength的直接链接")

创建一个调用`func`的函数。调用`func`时最多接受 `n`个参数，忽略多出的参数。

#### 添加版本

3.0.0

#### 参数

1.  `func` _(Function)_: 需要被限制参数个数的函数。
2.  `[n=func.length]` _(number)_: 限制的参数数量。

#### 返回

_(Function)_: 返回新的覆盖函数。

#### 例子

```js
_.map(['6', '8', '10'], _.ary(parseInt, 1));
// => [6, 8, 10]

```