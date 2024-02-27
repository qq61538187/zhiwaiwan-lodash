### `_.toPairsIn(object)`[​](#_topairsinobject "_topairsinobject的直接链接")

创建一个`object`对象自身和继承的可枚举属性的键值对数组。这个数组可以通过[`_.fromPairs`](#fromPairs)撤回。如果`object` 是 map 或 set，返回其条目。

#### 添加版本

4.0.0

#### Aliases

_\_.entriesIn_

#### 参数

1.  `object` _(Object)_: 要检索的对象。

#### 返回

_(Array)_: 返回键值对的数组。

#### 例子

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.toPairsIn(new Foo);
// => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)

```