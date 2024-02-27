### `_.memoize(func, [resolver])`[​](#_memoizefunc-resolver "_memoizefunc-resolver的直接链接")

创建一个会缓存 `func` 结果的函数。 如果提供了 `resolver` ，就用 resolver 的返回值作为 key 缓存函数的结果。 默认情况下用第一个参数作为缓存的 key。 `func` 在调用时 `this` 会绑定在缓存函数上。  
  
**注意**: 缓存会暴露在缓存函数的 `cache` 上。 它是可以定制的，只要替换了 `_.memoize.Cache` 构造函数，或实现了[`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object) 的 `delete`, `get`, `has`, 和 `set`方法。

#### 添加版本

0.1.0

#### 参数

1.  `func` _(Function)_: 需要缓存化的函数.
2.  `[resolver]` _(Function)_: 这个函数的返回值作为缓存的 key。

#### 返回

_(Function)_: 返回缓存化后的函数。

#### 例子

```js
var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };
 
var values = _.memoize(_.values);
values(object);
// => [1, 2]
 
values(other);
// => [3, 4]
 
object.a = 2;
values(object);
// => [1, 2]
 
// 修改结果缓存。
values.cache.set(object, ['a', 'b']);
values(object);
// => ['a', 'b']
 
// 替换 `_.memoize.Cache`。
_.memoize.Cache = WeakMap;

```