### `_.mapValues(object, [iteratee=_.identity])`[​](#_mapvaluesobject-iteratee_identity "_mapvaluesobject-iteratee_identity的直接链接")

创建一个对象，这个对象的key与`object`对象相同，值是通过 `iteratee` 运行 `object` 中每个自身可枚举属性名字符串产生的。 `iteratee`调用三个参数： _(value, key, object)_。

#### 添加版本

2.4.0

#### 参数

1.  `object` _(Object)_: 要遍历的对象。
2.  `[iteratee=_.identity]` _(Function)_: 每次迭代时调用的函数。

#### 返回

_(Object)_: 返回映射后的新对象。

#### 例子

```js

var users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};
 
_.mapValues(users, function(o) { return o.age; });
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 
// The `_.property` iteratee shorthand.
_.mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)

```