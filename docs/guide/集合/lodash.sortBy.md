### `_.sortBy(collection, [iteratees=[_.identity]])`[​](#_sortbycollection-iteratees_identity "_sortbycollection-iteratees_identity的直接链接")

创建一个元素数组。 以 iteratee 处理的结果升序排序。 这个方法执行稳定排序，也就是说相同元素会保持原始排序。 iteratees 调用1个参数： _(value)_。

#### 添加版本

0.1.0

#### 参数

1.  `collection` _(Array|Object)_: 用来迭代的集合。
2.  `[iteratees=[_.identity]]` _(...(Array|Array\[\]|Function|Function\[\]|Object|Object\[\]|string|string\[\]))_: 这个函数决定排序。

#### 返回

_(Array)_: 返回排序后的数组。

#### 例子


```js
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
 
_.sortBy(users, function(o) { return o.user; });
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 
_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 
_.sortBy(users, 'user', function(o) {
  return Math.floor(o.age / 10);
});
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

```