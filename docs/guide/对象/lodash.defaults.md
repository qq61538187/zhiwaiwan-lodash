### `_.defaults(object, [sources])`[​](#_defaultsobject-sources "_defaultsobject-sources的直接链接")

分配来源对象的可枚举属性到目标对象所有解析为 `undefined` 的属性上。 来源对象从左到右应用。 一旦设置了相同属性的值，后续的将被忽略掉。  
  
**注意:** 这方法会改变 `object`.

#### 添加版本

0.1.0

#### 参数

1.  `object` _(Object)_: 目标对象。
2.  `[sources]` _(...Object)_: 来源对象。

#### 返回

_(Object)_: 返回 `object`。

#### 例子

```js
_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }

```