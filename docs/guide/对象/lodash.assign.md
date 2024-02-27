### `_.assign(object, [sources])`[​](#_assignobject-sources "_assignobject-sources的直接链接")

分配来源对象的可枚举属性到目标对象上。 来源对象的应用规则是从左到右，随后的下一个对象的属性会覆盖上一个对象的属性。  
  
**注意:** 这方法会改变 `object`，参考自[`Object.assign`](https://mdn.io/Object/assign).

#### 添加版本

0.10.0

#### 参数

1.  `object` _(Object)_: 目标对象。
2.  `[sources]` _(...Object)_: 来源对象。

#### 返回

_(Object)_: 返回 `object`.

#### 例子

```js
function Foo() {
  this.a = 1;
}
 
function Bar() {
  this.c = 3;
}
 
Foo.prototype.b = 2;
Bar.prototype.d = 4;
 
_.assign({ 'a': 0 }, new Foo, new Bar);
// => { 'a': 1, 'c': 3 }

```