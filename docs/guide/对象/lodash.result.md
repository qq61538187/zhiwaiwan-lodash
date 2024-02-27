### `_.result(object, path, [defaultValue])`[​](#_resultobject-path-defaultvalue "_resultobject-path-defaultvalue的直接链接")

这个方法类似[`_.get`](#get)， 除了如果解析到的值是一个函数的话，就绑定 `this` 到这个函数并返回执行后的结果。

#### 添加版本

0.1.0

#### 参数

1.  `object` _(Object)_: 要检索的对象。
2.  `path` _(Array|string)_: 要解析的属性路径。
3.  `[defaultValue]` _(\*)_: 如果值解析为 `undefined`，返回这个值。

#### 返回

_(\*)_: 返回解析后的值。

#### 例子

```js
var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
 
_.result(object, 'a[0].b.c1');
// => 3
 
_.result(object, 'a[0].b.c2');
// => 4
 
_.result(object, 'a[0].b.c3', 'default');
// => 'default'
 
_.result(object, 'a[0].b.c3', _.constant('default'));
// => 'default'

```