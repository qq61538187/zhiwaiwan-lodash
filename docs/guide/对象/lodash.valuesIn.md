### `_.valuesIn(object)`[​](#_valuesinobject "_valuesinobject的直接链接")

创建 `object` 自身和继承的可枚举属性的值为数组  
  
**注意:** 注意: 非对象的值会强制转换为对象。

#### 添加版本

3.0.0

#### 参数

1.  `object` _(Object)_: 要检索的对象。

#### 返回

_(Array)_: 返回对象属性的值的数组。

#### 例子

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.valuesIn(new Foo);
// => [1, 2, 3] (无法保证遍历的顺序)

```