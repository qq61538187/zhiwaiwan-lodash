### `_.includes(collection, value, [fromIndex=0])`[​](#_includescollection-value-fromindex0 "_includescollection-value-fromindex0的直接链接")

检查 `value`(值) 是否在 `collection`(集合) 中。如果 `collection`(集合)是一个字符串，那么检查 `value`（值，子字符串） 是否在字符串中， 否则使用[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) 做等值比较。 如果指定 `fromIndex` 是负数，那么从 `collection`(集合) 的结尾开始检索。

#### 添加版本

0.1.0

#### 参数

1.  `collection` _(Array|Object|string)_: 要检索的集合。
2.  `value` _(\*)_: 要检索的值。
3.  `[fromIndex=0]` _(number)_: 要检索的 索引位置。

#### 返回

_(boolean)_: 如果找到 `value` 返回 `true`， 否则返回 `false`。

#### 例子

```js
_.includes([1, 2, 3], 1);
// => true
 
_.includes([1, 2, 3], 1, 2);
// => false
 
_.includes({ 'user': 'fred', 'age': 40 }, 'fred');
// => true
 
_.includes('pebbles', 'eb');
// => true

```