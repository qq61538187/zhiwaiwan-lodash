### `_.omitBy(object, [predicate=_.identity])`[​](#_omitbyobject-predicate_identity "_omitbyobject-predicate_identity的直接链接")

反向版[`_.pickBy`](#pickBy)；这个方法一个对象，这个对象忽略 `predicate`（断言函数）判断不是真值的属性后，`object`自身和继承的可枚举属性组成。`predicate`调用与2个参数：_(value, key)_。

#### 添加版本

4.0.0

#### 参数

1.  `object` _(Object)_: 来源对象。
2.  `[predicate=_.identity]` _(Function)_: 调用每一个属性的函数。

#### 返回

_(Object)_: 返回新对象。

#### 例子

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omitBy(object, _.isNumber);
// => { 'b': '2' }

```