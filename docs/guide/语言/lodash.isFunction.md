### `_.isFunction(value)`[​](#_isfunctionvalue "_isfunctionvalue的直接链接")

检查 `value` 是否是 `Function` 对象。

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 要检查的值

#### 返回

_(boolean)_: 如果 `value` 是一个函数，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isFunction(_);
// => true
 
_.isFunction(/abc/);
// => false

```