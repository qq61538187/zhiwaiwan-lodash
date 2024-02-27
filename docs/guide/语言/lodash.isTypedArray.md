### `_.isTypedArray(value)`[​](#_istypedarrayvalue "_istypedarrayvalue的直接链接")

检查 `value` 是否是TypedArray。

#### 添加版本

3.0.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 为一个typed array，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isTypedArray(new Uint8Array);
// => true
 
_.isTypedArray([]);
// => false

```