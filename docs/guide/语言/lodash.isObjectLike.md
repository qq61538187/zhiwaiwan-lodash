### `_.isObjectLike(value)`[​](#_isobjectlikevalue "_isobjectlikevalue的直接链接")

检查 `value` 是否是 类对象。 如果一个值是类对象，那么它不应该是 `null`，而且 `typeof` 后的结果是 "object"。

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 为一个类对象，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isObjectLike({});
// => true
 
_.isObjectLike([1, 2, 3]);
// => true
 
_.isObjectLike(_.noop);
// => false
 
_.isObjectLike(null);
// => false

```