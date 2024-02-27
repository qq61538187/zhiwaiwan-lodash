### `_.findKey(object, [predicate=_.identity])`[​](#_findkeyobject-predicate_identity "_findkeyobject-predicate_identity的直接链接")

这个方法类似[`_.find`](#find) 。 除了它返回最先被 `predicate` 判断为真值的元素 key，而不是元素本身。

#### 添加版本

1.1.0

#### 参数

1.  `object` _(Object)_: 需要检索的对象。
2.  `[predicate=_.identity]` _(Function)_: 每次迭代时调用的函数。

#### 返回

_(\*)_: 返回匹配的 key，否则返回 `undefined`。

#### 例子

```js
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
 
_.findKey(users, function(o) { return o.age < 40; });
// => 'barney' (iteration order is not guaranteed)
 
// The `_.matches` iteratee shorthand.
_.findKey(users, { 'age': 1, 'active': true });
// => 'pebbles'
 
// The `_.matchesProperty` iteratee shorthand.
_.findKey(users, ['active', false]);
// => 'fred'
 
// The `_.property` iteratee shorthand.
_.findKey(users, 'active');
// => 'barney'

```