### `_.before(n, func)`[​](#_beforen-func "_beforen-func的直接链接")

创建一个调用`func`的函数，通过`this`绑定和创建函数的参数调用`func`，调用次数不超过 `n` 次。 之后再调用这个函数，将返回一次最后调用`func`的结果。

#### 添加版本

3.0.0

#### 参数

1.  `n` _(number)_: 超过多少次不再调用`func`（注：限制调用`func` 的次数）。
2.  `func` _(Function)_: 限制执行的函数。

#### 返回

_(Function)_: 返回新的限定函数。

#### 例子


```js
jQuery(element).on('click', _.before(5, addContactToList));
// => allows adding up to 4 contacts to the list

```