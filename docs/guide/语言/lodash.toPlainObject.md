### `_.toPlainObject(value)`[​](#_toplainobjectvalue "_toplainobjectvalue的直接链接")

转换 `value` 为普通对象。 包括继承的可枚举属性。

#### 添加版本

3.0.0

#### 参数

1.  `value` _(\*)_: 要转换的值。

#### 返回

_(Object)_: 返回转换后的普通对象。

#### 例子

```js
function Foo() {
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.assign({ 'a': 1 }, new Foo);
// => { 'a': 1, 'b': 2 }
 
_.assign({ 'a': 1 }, _.toPlainObject(new Foo));
// => { 'a': 1, 'b': 2, 'c': 3 }

```