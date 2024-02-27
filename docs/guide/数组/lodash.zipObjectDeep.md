### `_.zipObjectDeep([props=[]], [values=[]])`[​](#_zipobjectdeepprops-values "_zipobjectdeepprops-values的直接链接")

这个方法类似[`_.zipObject`](#zipObject)，除了它支持属性路径。

#### 添加版本

4.1.0

#### 参数

1.  `[props=[]]` _(Array)_: 属性标识符（属性名）。
2.  `[values=[]]` _(Array)_: 属性值。

#### 返回

_(Object)_: 返回新对象。

#### 例子

```js
_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }

```