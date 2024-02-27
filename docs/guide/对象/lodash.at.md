### `_.at(object, [paths])`[​](#_atobject-paths "_atobject-paths的直接链接")

创建一个数组，值来自 `object` 的`paths`路径相应的值。

#### 添加版本

1.0.0

#### 参数

1.  `object` _(Object)_: 要迭代的对象。
2.  `[paths]` _(...(string|string\[\]))_: 要获取的对象的元素路径，单独指定或者指定在数组中。

#### 返回

_(Array)_: 返回选中值的数组。

#### 例子

```js
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 
_.at(object, ['a[0].b.c', 'a[1]']);
// => [3, 4]

```