### `_.isArrayLikeObject(value)`[​](#_isarraylikeobjectvalue "_isarraylikeobjectvalue的直接链接")

这个方法类似[`_.isArrayLike`](#isArrayLike)。除了它还检查`value`是否是个对象。

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 是一个类数组对象，那么返回 `true`，否则返回 `false`。

#### 例子

```js

_.isArrayLikeObject([1, 2, 3]);
// => true
 
_.isArrayLikeObject(document.body.children);
// => true
 
_.isArrayLikeObject('abc');
// => false
 
_.isArrayLikeObject(_.noop);
// => false

```