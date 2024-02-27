### `_.dropWhile(array, [predicate=_.identity])`[​](#_dropwhilearray-predicate_identity "_dropwhilearray-predicate_identity的直接链接")

创建一个切片数组，去除`array`中从起点开始到 `predicate` 返回假值结束部分。predicate 会传入3个参数： _(value, index, array)_。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要查询的数组。
2.  `[predicate=_.identity]` _(Function)_: 这个函数会在每一次迭代调用。

#### 返回值

_(Array)_: 返回`array`剩余切片。

#### 例子

```js
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']
 
// The `_.matches` iteratee shorthand.
_.dropWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['fred', 'pebbles']
 
// The `_.matchesProperty` iteratee shorthand.
_.dropWhile(users, ['active', false]);
// => objects for ['pebbles']
 
// The `_.property` iteratee shorthand.
_.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']

```