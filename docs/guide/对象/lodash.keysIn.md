### `_.keysIn(object)`[​](#_keysinobject "_keysinobject的直接链接")

创建一个 `object` 自身 和 继承的可枚举属性名为数组。  
  
**注意:** 非对象的值会被强制转换为对象。

#### 添加版本

3.0.0

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
 
_.keysIn(new Foo);
// => ['a', 'b', 'c'] (iteration order is not guaranteed)

```