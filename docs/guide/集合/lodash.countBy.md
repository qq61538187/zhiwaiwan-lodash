### `_.countBy(collection, [iteratee=_.identity])`[​](#_countbycollection-iteratee_identity "_countbycollection-iteratee_identity的直接链接")

创建一个组成对象，key（键）是经过 `iteratee`（迭代函数） 执行处理`collection`中每个元素后返回的结果，每个key（键）对应的值是 `iteratee`（迭代函数）返回该key（键）的次数（注：迭代次数）。 iteratee 调用一个参数：_(value)_。

#### 添加版本

0.5.0

#### 参数

1.  `collection` _(Array|Object)_: 一个用来迭代的集合。
2.  `[iteratee=_.identity]` _(Array|Function|Object|string)_: 一个迭代函数，用来转换key（键）。

#### 返回

_(Object)_: 返回一个组成集合对象。

#### 例子

```js
_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
 
// The `_.property` iteratee shorthand.
_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }

```