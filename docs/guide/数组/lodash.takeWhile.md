### `_.takeWhile(array, [predicate=_.identity])`[​](#_takewhilearray-predicate_identity "_takewhilearray-predicate_identity的直接链接")

从`array`数组的起始元素开始提取元素，，直到 `predicate` 返回假值。`predicate` 会传入三个参数： _(value, index, array)_。

#### 添加版本

3.0.0

#### 参数

1.  `array` _(Array)_: 需要处理的数组
2.  `[predicate=_.identity]` _(Array|Function|Object|string)_: 每次迭代调用的函数。

#### 返回

_(Array)_: 返回 `array` 数组的切片。

#### 例子

```js

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false},
  { 'user': 'pebbles', 'active': true }
];
 
_.takeWhile(users, function(o) { return !o.active; });
// => objects for ['barney', 'fred']
 
// The `_.matches` iteratee shorthand.
_.takeWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['barney']
 
// The `_.matchesProperty` iteratee shorthand.
_.takeWhile(users, ['active', false]);
// => objects for ['barney', 'fred']
 
// The `_.property` iteratee shorthand.
_.takeWhile(users, 'active');
// => []

```