### `_.hasIn(object, path)`[​](#_hasinobject-path "_hasinobject-path的直接链接")

检查 `path` 是否是`object`对象的直接或继承属性。

#### 添加版本

4.0.0

#### 参数

1.  `object` _(Object)_: 要检索的对象。
2.  `path` _(Array|string)_: 要检查的路径`path`。

#### 返回

_(boolean)_: 如果`path`存在，那么返回 `true` ，否则返回 `false`。

#### 例子

```js
var object = _.create({ 'a': _.create({ 'b': 2 }) });
 
_.hasIn(object, 'a');
// => true
 
_.hasIn(object, 'a.b');
// => true
 
_.hasIn(object, ['a', 'b']);
// => true
 
_.hasIn(object, 'b');
// => false

```