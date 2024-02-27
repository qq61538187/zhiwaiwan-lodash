### `_.isMatch(object, source)`[​](#_ismatchobject-source "_ismatchobject-source的直接链接")

执行一个深度比较，来确定 `object` 是否含有和 `source` 完全相等的属性值。  
  
**注意:** 当`source`为偏应用时，这种方法等价于[`_.matches`](#matches)。（注：关于偏应用大家可以自己到google上搜索一下）。  
  
偏应用比较匹配空数组和空对象`source`值分别针对任何数组或对象的价值。在[`_.isEqual`](#isEqual)中查看支持的值比较列表。

#### 添加版本

3.0.0

#### 参数

1.  `object` _(Object)_: 要检查的对象。
2.  `source` _(Object)_: 属性值相匹配的对象。

#### 返回

_(boolean)_: 如果`object`匹配，那么返回 `true`，否则返回 `false`。

#### 例子

```js
var object = { 'a': 1, 'b': 2 };
 
_.isMatch(object, { 'b': 2 });
// => true
 
_.isMatch(object, { 'b': 1 });
// => false

```