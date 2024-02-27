### `_.invoke(object, path, [args])`[​](#_invokeobject-path-args "_invokeobject-path-args的直接链接")

调用`object`对象`path`上的方法。

#### 添加版本

4.0.0

#### 参数

1.  `object` _(Object)_: 要检索的对象。
2.  `path` _(Array|string)_: 用来调用的方法路径。
3.  `[args]` _(...\*)_: 调用的方法的参数。

#### 返回

_(\*)_: 返回调用方法的结果。

#### 例子

```js
var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
 
_.invoke(object, 'a[0].b.c.slice', 1, 3);
// => [2, 3]

```