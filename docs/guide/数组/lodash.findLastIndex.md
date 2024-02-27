### `_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])`[​](#_findlastindexarray-predicate_identity-fromindexarraylength-1 "_findlastindexarray-predicate_identity-fromindexarraylength-1的直接链接")

这个方式类似[`_.findIndex`](#findIndex)， 区别是它是从右到左的迭代集合`array`中的元素。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要搜索的数组。
2.  `[predicate=_.identity]` _(Array|Function|Object|string)_: 这个函数会在每一次迭代调用。
3.  `[fromIndex=array.length-1]` _(number)_: The index to search from.

#### 返回值

_(number)_: 返回找到元素的 索引值（index），否则返回 `-1`。

#### 例子

```js
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
_.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
// => 2
 
// The `_.matches` iteratee shorthand.
_.findLastIndex(users, { 'user': 'barney', 'active': true });
// => 0
 
// The `_.matchesProperty` iteratee shorthand.
_.findLastIndex(users, ['active', false]);
// => 2
 
// The `_.property` iteratee shorthand.
_.findLastIndex(users, 'active');
// => 0

```