### `_.pick(object, [props])`[​](#_pickobject-props "_pickobject-props的直接链接")

创建一个从 `object` 中选中的属性的对象。

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
 
_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }

```