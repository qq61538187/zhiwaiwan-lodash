### `_.defaultsDeep(object, [sources])`[​](#_defaultsdeepobject-sources "_defaultsdeepobject-sources的直接链接")

这个方法类似[`_.defaults`](#defaults)，除了它会递归分配默认属性。  
  
**注意:** 这方法会改变 `object`.

#### 添加版本

3.10.0

#### 参数

1.  `object` _(Object)_: 目标对象。
2.  `[sources]` _(...Object)_: 来源对象。

#### 返回

_(Object)_: 返回 `object`。

#### 例子

```js
_.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
// => { 'a': { 'b': 2, 'c': 3 } }

```