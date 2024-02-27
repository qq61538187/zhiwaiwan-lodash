### `_.dropRightWhile(array, [predicate=_.identity])`[​](#_droprightwhilearray-predicate_identity "_droprightwhilearray-predicate_identity的直接链接")

创建一个切片数组，去除`array`中从 `predicate` 返回假值开始到尾部的部分。predicate 会传入3个参数： _(value, index, array)_。

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
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
_.dropRightWhile(users, function(o) { return !o.active; });
// => objects for ['barney']
 
// The `_.matches` iteratee shorthand.
_.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// => objects for ['barney', 'fred']
 
// The `_.matchesProperty` iteratee shorthand.
_.dropRightWhile(users, ['active', false]);
// => objects for ['barney']
 
// The `_.property` iteratee shorthand.
_.dropRightWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
```