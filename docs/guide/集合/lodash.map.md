### `_.map(collection, [iteratee=_.identity])`[​](#_mapcollection-iteratee_identity "_mapcollection-iteratee_identity的直接链接")

创建一个数组， value（值） 是 `iteratee`（迭代函数）遍历 `collection`（集合）中的每个元素后返回的结果。 iteratee（迭代函数）调用3个参数：  
_(value, index|key, collection)_.  
  
lodash 中有许多方法是防止作为其他方法的迭代函数（注：即不能作为iteratee参数传递给其他方法），例如：[`_.every`](#every),[`_.filter`](#filter),[`_.map`](#map),[`_.mapValues`](#mapValues),[`_.reject`](#reject), 和[`_.some`](#some)。  
  
受保护的方法有（注：即这些方法不能使用[`_.every`](#every),[`_.filter`](#filter),[`_.map`](#map),[`_.mapValues`](#mapValues),[`_.reject`](#reject), 和[`_.some`](#some)作为 iteratee 迭代函数参数） ：  
`ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,`fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,`sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,`template`, `trim`, `trimEnd`, `trimStart`, and `words`

#### 添加版本

0.1.0

#### 参数

1.  `collection` _(Array|Object)_: 用来迭代的集合。
2.  `[iteratee=_.identity]` _(Array|Function|Object|string)_: 每次迭代调用的函数。

#### 返回

_(Array)_: 返回新的映射后数组。

#### 例子

```js
function square(n) {
  return n * n;
}
 
_.map([4, 8], square);
// => [16, 64]
 
_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)
 
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']

```