### `_.pickBy(object, [predicate=_.identity])`[​](#_pickbyobject-predicate_identity "_pickbyobject-predicate_identity的直接链接")

创建一个对象，这个对象组成为从 `object` 中经 `predicate` 判断为真值的属性。 `predicate`调用2个参数：_(value, key)_。

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
 
_.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }

```