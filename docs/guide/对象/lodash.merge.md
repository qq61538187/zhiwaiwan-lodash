### `_.merge(object, [sources])`[​](#_mergeobject-sources "_mergeobject-sources的直接链接")

该方法类似[`_.assign`](#assign)， 除了它递归合并 `sources` 来源对象自身和继承的可枚举属性到 `object` 目标对象。如果目标值存在，被解析为`undefined`的`sources` 来源对象属性将被跳过。数组和普通对象会递归合并，其他对象和值会被直接分配覆盖。源对象从从左到右分配。后续的来源对象属性会覆盖之前分配的属性。  
  
**Note:** 这方法会改变对象 `object`.

#### 添加版本

0.5.0

#### 参数

1.  `object` _(Object)_: 目标对象。
2.  `[sources]` _(...Object)_: 来源对象。

#### 返回

_(Object)_: 返回 `object`.

#### 例子


```js
var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
 
var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
_.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

```