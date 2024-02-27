### `_.isArrayBuffer(value)`[​](#_isarraybuffervalue "_isarraybuffervalue的直接链接")

检查 `value` 是否是 `ArrayBuffer` 对象。

#### 添加版本

4.3.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果`value`是一个数组 buffer 返回 `true`，否则返回 `false`。

#### 例子

```js
_.isArrayBuffer(new ArrayBuffer(2));
// => true
 
_.isArrayBuffer(new Array(2));
// => false

```