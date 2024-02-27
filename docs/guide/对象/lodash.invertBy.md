### `_.invertBy(object, [iteratee=_.identity])`[​](#_invertbyobject-iteratee_identity "_invertbyobject-iteratee_identity的直接链接")

这个方法类似[`_.invert`](#invert)，除了倒置对象 是 `collection`（集合）中的每个元素经过 `iteratee`（迭代函数） 处理后返回的结果。每个反转键相应反转的值是一个负责生成反转值key的数组。`iteratee` 会传入3个参数：_(value)_ 。

#### 添加版本

4.1.0

#### 参数

1.  `object` _(Object)_: 要键值倒置对象。
2.  `[iteratee=_.identity]` _(Function)_: 每次迭代时调用的函数。

#### 返回

_(Object)_: 返回新的键值倒置后的对象。

#### 例子

```js
var object = { 'a': 1, 'b': 2, 'c': 1 };
 
_.invertBy(object);
// => { '1': ['a', 'c'], '2': ['b'] }
 
_.invertBy(object, function(value) {
  return 'group' + value;
});
// => { 'group1': ['a', 'c'], 'group2': ['b'] }

```