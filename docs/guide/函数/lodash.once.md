### `_.once(func)`[​](#_oncefunc "_oncefunc的直接链接")

创建一个只能调用 `func` 一次的函数。 重复调用返回第一次调用的结果。 `func` 调用时， `this` 绑定到创建的函数，并传入对应参数。

#### 添加版本

0.1.0

#### 参数

1.  `func` _(Function)_: 指定的触发的函数。

#### 返回

_(Function)_: 返回新的受限函数。

#### 例子

```js
var initialize = _.once(createApplication);
initialize();
initialize();
// `initialize` 只能调用 `createApplication` 一次。

```