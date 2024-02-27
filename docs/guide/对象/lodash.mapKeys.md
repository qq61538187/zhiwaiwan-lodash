### `_.mapKeys(object, [iteratee=_.identity])`[​](#_mapkeysobject-iteratee_identity "_mapkeysobject-iteratee_identity的直接链接")

反向版[`_.mapValues`](#mapValues)。 这个方法创建一个对象，对象的值与`object`相同，并且 key 是通过 `iteratee` 运行 `object` 中每个自身可枚举属性名字符串 产生的。`iteratee`调用三个参数： _(value, key, object)_。

#### 添加版本

3.8.0

#### 参数

1.  `object` _(Object)_: 要遍历的对象。
2.  `[iteratee=_.identity]` _(Function)_: 每次迭代时调用的函数。

#### 返回

_(Object)_: 返回映射后的新对象。

#### 例子


```js
_.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
// => { 'a1': 1, 'b2': 2 }

```