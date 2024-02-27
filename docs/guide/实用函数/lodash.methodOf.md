### `_.methodOf(object, [args])`[​](#_methodofobject-args "_methodofobject-args的直接链接")

[`_.method`](#method)的反向版。 这个创建一个函数调用给定 `object` 的 path 上的方法， 任何附加的参数都会传入这个调用函数中。

#### 添加版本

3.7.0

#### 参数

1.  `object` _(Object)_: 要检索的对象。
2.  `[args]` _(...\*)_: 传递给调用函数的参数。

#### 返回

_(Function)_: 返回新的调用函数。

#### 例子

```js
var array = _.times(3, _.constant),
    object = { 'a': array, 'b': array, 'c': array };
 
_.map(['a[2]', 'c[0]'], _.methodOf(object));
// => [2, 0]
 
_.map([['a', '2'], ['c', '0']], _.methodOf(object));
// => [2, 0]

```