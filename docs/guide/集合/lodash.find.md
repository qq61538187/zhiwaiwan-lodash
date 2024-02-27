### `_.find(collection, [predicate=_.identity], [fromIndex=0])`[​](#_findcollection-predicate_identity-fromindex0 "_findcollection-predicate_identity-fromindex0的直接链接")

遍历 `collection`（集合）元素，返回 `predicate`（断言函数）第一个返回真值的第一个元素。predicate（断言函数）调用3个参数： _(value, index|key, collection)_。

#### 添加版本

0.1.0

#### 参数

1.  `collection` _(Array|Object)_: 一个用来迭代的集合。
2.  `[predicate=_.identity]` _(Array|Function|Object|string)_: 每次迭代调用的函数。
3.  `[fromIndex=0]` _(number)_: 开始搜索的索引位置。

#### 返回

_(\*)_: 返回匹配元素，否则返回 `undefined`。

#### 例子

```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
_.find(users, function(o) { return o.age < 40; });
// => object for 'barney'
 
// The `_.matches` iteratee shorthand.
_.find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'
 
// The `_.matchesProperty` iteratee shorthand.
_.find(users, ['active', false]);
// => object for 'fred'
 
// The `_.property` iteratee shorthand.
_.find(users, 'active');
// => object for 'barney'

```