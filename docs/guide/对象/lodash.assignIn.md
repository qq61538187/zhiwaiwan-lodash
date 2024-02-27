### `_.assignIn(object, [sources])`[​](#_assigninobject-sources "_assigninobject-sources的直接链接")

这个方法类似[`_.assign`](#assign)， 除了它会遍历并继承来源对象的属性。  
  
**Note:** 这方法会改变 `object`。

#### 添加版本

4.0.0

#### Aliases

_\_.extend_

#### 参数

1.  `object` _(Object)_: 目标对象。
2.  `[sources]` _(...Object)_: 来源对象。

#### 返回

_(Object)_: 返回 `object`。

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
 
_.assignIn({ 'a': 0 }, new Foo, new Bar);
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }

```