### `_.omit(object, [props])`[​](#_omitobject-props "_omitobject-props的直接链接")

反向版[`_.pick`](#pick); 这个方法一个对象，这个对象由忽略属性之外的`object`自身和继承的可枚举属性组成。（注：可以理解为删除`object`对象的属性）。

#### 添加版本

0.1.0

#### 参数

1.  `object` _(Object)_: 来源对象。
2.  `[props]` _(...(string|string\[\]))_: 要被忽略的属性。（注：单独指定或指定在数组中。）

#### 返回

_(Object)_: 返回新对象。

#### 例子

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omit(object, ['a', 'c']);
// => { 'b': '2' }

```