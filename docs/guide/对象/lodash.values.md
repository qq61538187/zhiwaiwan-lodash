### `_.values(object)`[​](#_valuesobject "_valuesobject的直接链接")

创建 `object` 自身可枚举属性的值为数组。  
  
**注意:** 注意: 非对象的值会强制转换为对象。

#### 添加版本

0.1.0

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
 
_.values(new Foo);
// => [1, 2] (无法保证遍历的顺序)
 
_.values('hi');
// => ['h', 'i']


```