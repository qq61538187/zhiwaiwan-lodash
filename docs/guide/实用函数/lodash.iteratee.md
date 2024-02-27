### `_.iteratee([func=_.identity])`[​](#_iterateefunc_identity "_iterateefunc_identity的直接链接")

创建一个函数，通过创建函数的参数调用 `func` 函数。 如果 `func` 是一个属性名，传入包含这个属性名的对象，回调返回对应属性名的值。 如果 `func` 是一个对象，传入的元素有相同的对象属性，回调返回 `true` 。 其他情况返回 `false` 。

#### 添加版本

4.0.0

#### 参数

1.  `[func=_.identity]` _(\*)_: 转换成 callback 的值。

#### 返回

_(Function)_: 返回回调函数 callback。

#### 例子

```js
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
 
// The `_.matches` iteratee shorthand.
_.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
// => [{ 'user': 'barney', 'age': 36, 'active': true }]
 
// The `_.matchesProperty` iteratee shorthand.
_.filter(users, _.iteratee(['user', 'fred']));
// => [{ 'user': 'fred', 'age': 40 }]
 
// The `_.property` iteratee shorthand.
_.map(users, _.iteratee('user'));
// => ['barney', 'fred']
 
// Create custom iteratee shorthands.
_.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
  return !_.isRegExp(func) ? iteratee(func) : function(string) {
    return func.test(string);
  };
});
 
_.filter(['abc', 'def'], /ef/);
// => ['def']

```