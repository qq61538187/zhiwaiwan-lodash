### `_.takeRightWhile(array, [predicate=_.identity])`[​](#_takerightwhilearray-predicate_identity "_takerightwhilearray-predicate_identity的直接链接")

从`array`数组的最后一个元素开始提取元素，直到 `predicate` 返回假值。`predicate` 会传入三个参数： _(value, index, array)_。

#### 添加版本

3.0.0

#### 参数

1.  `array` _(Array)_: 要检索的数组。
2.  `[predicate=_.identity]` _(Array|Function|Object|string)_: 每次迭代调用的函数。

#### 返回

_(Array)_: 返回 `array` 数组的切片。

#### 例子

```js
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
_.takeRightWhile(users, function(o) { return !o.active; });
// => objects for ['fred', 'pebbles']
 
// The `_.matches` iteratee shorthand.
_.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
// => objects for ['pebbles']
 
// The `_.matchesProperty` iteratee shorthand.
_.takeRightWhile(users, ['active', false]);
// => objects for ['fred', 'pebbles']
 
// The `_.property` iteratee shorthand.
_.takeRightWhile(users, 'active');
// => []

```