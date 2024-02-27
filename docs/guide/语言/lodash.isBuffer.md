### `_.isBuffer(value)`[​](#_isbuffervalue "_isbuffervalue的直接链接")

检查 `value` 是否是个 buffer。

#### 添加版本

4.3.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 是一个buffer，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isBuffer(new Buffer(2));
// => true
 
_.isBuffer(new Uint8Array(2));
// => false

```