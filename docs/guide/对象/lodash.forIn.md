### `_.forIn(object, [iteratee=_.identity])`[​](#_forinobject-iteratee_identity "_forinobject-iteratee_identity的直接链接")

使用 `iteratee` 遍历对象的自身和继承的可枚举属性。 `iteratee` 会传入3个参数：_(value, key, object)_。 如果返回 `false`，`iteratee` 会提前退出遍历。

#### 添加版本

0.3.0

#### 参数

1.  `object` _(Object)_: 要遍历的对象。
2.  `[iteratee=_.identity]` _(Function)_: 每次迭代时调用的函数。

#### 返回

_(Object)_: 返回 `object`。

#### 例子

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.forIn(new Foo, function(value, key) {
  console.log(key);
});
// => Logs 'a', 'b', then 'c' (无法保证遍历的顺序)。


```