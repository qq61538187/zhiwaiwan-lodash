### `_.keys(object)`[​](#_keysobject "_keysobject的直接链接")

创建一个 `object` 的自身可枚举属性名为数组。  
  
**Note:** 非对象的值会被强制转换为对象，查看[ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys) 了解详情。

#### 添加版本

0.1.0

#### 参数

1.  `object` _(Object)_: 要检索的对象。

#### 返回

_(Array)_: 返回包含属性名的数组。

#### 例子


```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.keys(new Foo);
// => ['a', 'b'] (iteration order is not guaranteed)
 
_.keys('hi');
// => ['0', '1']

```