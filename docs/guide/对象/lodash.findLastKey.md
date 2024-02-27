### `_.findLastKey(object, [predicate=_.identity])`[​](#_findlastkeyobject-predicate_identity "_findlastkeyobject-predicate_identity的直接链接")

这个方法类似[`_.findKey`](#findKey)。 不过它是反方向开始遍历的。

#### 添加版本

2.0.0

#### 参数

1.  `object` _(Object)_: 需要检索的对象。
2.  `[predicate=_.identity]` _(Function)_: 每次迭代时调用的函数。

#### 返回

_(\*)_: 返回匹配的 key，否则返回 `undefined`.

#### 例子


```js
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
 
_.findLastKey(users, function(o) { return o.age < 40; });
// => returns 'pebbles' assuming `_.findKey` returns 'barney'
 
// The `_.matches` iteratee shorthand.
_.findLastKey(users, { 'age': 36, 'active': true });
// => 'barney'
 
// The `_.matchesProperty` iteratee shorthand.
_.findLastKey(users, ['active', false]);
// => 'fred'
 
// The `_.property` iteratee shorthand.
_.findLastKey(users, 'active');
// => 'pebbles'

```