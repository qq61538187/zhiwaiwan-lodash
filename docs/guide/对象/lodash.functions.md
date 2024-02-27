### `_.functions(object)`[​](#_functionsobject "_functionsobject的直接链接")

创建一个函数属性名称的数组，函数属性名称来自`object`对象自身可枚举属性。

#### 添加版本

0.1.0

#### 参数

1.  `object` _(Object)_: 要检查的对象。

#### 返回

_(Array)_: 返回函数名。

#### 例子

```js
function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}
 
Foo.prototype.c = _.constant('c');
 
_.functions(new Foo);
// => ['a', 'b']

```