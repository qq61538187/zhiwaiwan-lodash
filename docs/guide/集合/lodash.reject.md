### `_.reject(collection, [predicate=_.identity])`[​](#_rejectcollection-predicate_identity "_rejectcollection-predicate_identity的直接链接")

[`_.filter`](#filter)的反向方法;此方法 返回 `predicate`（断言函数） **不** 返回 truthy（真值）的`collection`（集合）元素（注释：非真）。

#### 添加版本

0.1.0

#### 参数

1.  `collection` _(Array|Object)_: 用来迭代的集合。
2.  `[predicate=_.identity]` _(Array|Function|Object|string)_: 每次迭代调用的函数。

#### 返回

_(Array)_: 返回过滤后的新数组

#### 例子

```js
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];
 
_.reject(users, function(o) { return !o.active; });
// => objects for ['fred']
 
// `_.matches` 迭代简写
_.reject(users, { 'age': 40, 'active': true });
// => objects for ['barney']
 
// `_.matchesProperty` 迭代简写
_.reject(users, ['active', false]);
// => objects for ['fred']
 
// `_.property` 迭代简写
_.reject(users, 'active');
// => objects for ['barney']

```