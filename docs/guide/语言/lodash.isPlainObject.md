### `_.isPlainObject(value)`[​](#_isplainobjectvalue "_isplainobjectvalue的直接链接")

检查 `value` 是否是普通对象。 也就是说该对象由 `Object` 构造函数创建，或者 `[[Prototype]]` 为 `null` 。

#### 添加版本

0.8.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 为一个普通对象，那么返回 `true`，否则返回 `false`。

#### 例子

```js
function Foo() {
  this.a = 1;
}
 
_.isPlainObject(new Foo);
// => false
 
_.isPlainObject([1, 2, 3]);
// => false
 
_.isPlainObject({ 'x': 0, 'y': 0 });
// => true
 
_.isPlainObject(Object.create(null));
// => true

```