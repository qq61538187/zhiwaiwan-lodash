### `_.unary(func)`[​](#_unaryfunc "_unaryfunc的直接链接")

创建一个最多接受一个参数的函数，忽略多余的参数。

#### 添加版本

4.0.0

#### 参数

1.  `func` _(Function)_: 要处理的函数。

#### 返回

_(Function)_: 返回新函数。

#### 例子

```js
_.map(['6', '8', '10'], _.unary(parseInt));
// => [6, 8, 10]

```