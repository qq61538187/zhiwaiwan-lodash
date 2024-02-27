### `_.groupBy(collection, [iteratee=_.identity])`[​](#_groupbycollection-iteratee_identity "_groupbycollection-iteratee_identity的直接链接")

创建一个对象，key 是 `iteratee` 遍历 `collection`(集合) 中的每个元素返回的结果。 分组值的顺序是由他们出现在 `collection`(集合) 中的顺序确定的。每个键对应的值负责生成 key 的元素组成的数组。iteratee 调用 1 个参数： _(value)_。

#### 添加版本

0.1.0

#### 参数

1.  `collection` _(Array|Object)_: 一个用来迭代的集合。
2.  `[iteratee=_.identity]` _(Array|Function|Object|string)_: 这个迭代函数用来转换key。

#### 返回

_(Object)_: 返回一个组成聚合的对象。

#### 例子

```js
_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
 
// The `_.property` iteratee shorthand.
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }

```