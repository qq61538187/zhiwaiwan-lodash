### `_.keyBy(collection, [iteratee=_.identity])`[​](#_keybycollection-iteratee_identity "_keybycollection-iteratee_identity的直接链接")

创建一个对象组成， key（键） 是 `collection`（集合）中的每个元素经过 `iteratee`（迭代函数） 处理后返回的结果。 每个 key（键）对应的值是生成key（键）的最后一个元素。`iteratee`（迭代函数）调用1个参数：_(value)_。

#### 添加版本

4.0.0

#### 参数

1.  `collection` _(Array|Object)_: 用来迭代的集合。
2.  `[iteratee=_.identity]` _(Array|Function|Object|string)_: 这个迭代函数用来转换key。

#### 返回

_(Object)_: 返回一个组成聚合的对象。

#### 例子


```js
var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];
 
_.keyBy(array, function(o) {
  return String.fromCharCode(o.code);
});
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 
_.keyBy(array, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }

```