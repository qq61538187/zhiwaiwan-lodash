### `_.findIndex(array, [predicate=_.identity], [fromIndex=0])`[​](#_findindexarray-predicate_identity-fromindex0 "_findindexarray-predicate_identity-fromindex0的直接链接")

该方法类似[`_.find`](#find)，区别是该方法返回第一个通过 `predicate` 判断为真值的元素的索引值（index），而不是元素本身。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要搜索的数组。
2.  `[predicate=_.identity]` _(Array|Function|Object|string)_: 这个函数会在每一次迭代调用。
3.  `[fromIndex=0]` _(number)_: The index to search from.

#### 返回值

_(number)_: 返回找到元素的 索引值（index），否则返回 `-1`。

#### 例子

```js
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.findIndex(users, function(o) { return o.user == 'barney'; });
// => 0
 
// The `_.matches` iteratee shorthand.
_.findIndex(users, { 'user': 'fred', 'active': false });
// => 1
 
// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0
 
// The `_.property` iteratee shorthand.
_.findIndex(users, 'active');
// => 2

```