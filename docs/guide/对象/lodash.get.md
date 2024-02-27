### `_.get(object, path, [defaultValue])`[​](#_getobject-path-defaultvalue "_getobject-path-defaultvalue的直接链接")

根据 `object`对象的`path`路径获取值。 如果解析 value 是 `undefined` 会以 `defaultValue` 取代。

#### 添加版本

3.7.0

#### 参数

1.  `object` _(Object)_: 要检索的对象。
2.  `path` _(Array|string)_: 要获取属性的路径。
3.  `[defaultValue]` _(\*)_: 如果解析值是 `undefined` ，这值会被返回。

#### 返回

_(\*)_: 返回解析的值。

#### 例子

```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.get(object, 'a[0].b.c');
// => 3
 
_.get(object, ['a', '0', 'b', 'c']);
// => 3
 
_.get(object, 'a.b.c', 'default');
// => 'default'

```