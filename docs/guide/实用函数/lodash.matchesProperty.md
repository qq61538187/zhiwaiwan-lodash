### `_.matchesProperty(path, srcValue)`[​](#_matchespropertypath-srcvalue "_matchespropertypath-srcvalue的直接链接")

创建一个深比较的方法来比较给定对象的 `path` 的值是否是 `srcValue` 。 如果是返回 `true` ，否则返回 `false` 。  
  
**注意:** 这个方法支持以[`_.isEqual`](#isEqual) 的方式比较相同的值。

#### 添加版本

3.2.0

#### 参数

1.  `path` _(Array|string)_: 给定对象的属性路径名。
2.  `srcValue` _(\*)_: 要匹配的值。

#### 返回

_(Function)_: 返回新的函数。

#### 例子

```js
var objects = [
  { 'a': 1, 'b': 2, 'c': 3 },
  { 'a': 4, 'b': 5, 'c': 6 }
];
 
_.find(objects, _.matchesProperty('a', 4));
// => { 'a': 4, 'b': 5, 'c': 6 }

```