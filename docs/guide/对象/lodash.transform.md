### `_.transform(object, [iteratee=_.identity], [accumulator])`[​](#_transformobject-iteratee_identity-accumulator "_transformobject-iteratee_identity-accumulator的直接链接")

[`_.reduce`](#reduce)的替代方法;此方法将转换`object`对象为一个新的`accumulator`对象，结果来自`iteratee`处理自身可枚举的属性。 每次调用可能会改变 `accumulator` 对象。如果不提供`accumulator`，将使用与`[[Prototype]]`相同的新对象。`iteratee`调用4个参数：_(accumulator, value, key, object)_。如果返回 `false`，`iteratee` 会提前退出。

#### 添加版本

1.3.0

#### 参数

1.  `object` _(Object)_: 要遍历的对象
2.  `[iteratee=_.identity]` _(Function)_: 每次迭代时调用的函数。
3.  `[accumulator]` _(\*)_: 定制叠加的值。

#### 返回

_(\*)_: 返回叠加后的值。

#### 例子

```js
_.transform([2, 3, 4], function(result, n) {
  result.push(n *= n);
  return n % 2 == 0;
}, []);
// => [4, 9]
 
_.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
}, {});
// => { '1': ['a', 'c'], '2': ['b'] }

```