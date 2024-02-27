### `_.zipObject([props=[]], [values=[]])`[​](#_zipobjectprops-values "_zipobjectprops-values的直接链接")

这个方法类似[`_.fromPairs`](#fromPairs)，除了它接受2个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。

#### 添加版本

0.4.0

#### 参数

1.  `[props=[]]` _(Array)_: The property identifiers.
2.  `[values=[]]` _(Array)_: The property values.

#### 返回

_(Object)_: Returns the new object.

#### 例子

```js
_.zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }

```