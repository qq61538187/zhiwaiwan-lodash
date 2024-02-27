### `_.conforms(source)`[​](#_conformssource "_conformssource的直接链接")

创建一个函数。 这个函数会 调用 `source` 的属性名对应的 predicate 与传入对象相对应属性名的值进行断言处理。 如果都符合返回 `true` ，否则返回 `false` 。  
  
**注意:** 当`source`为偏应用时，这种方法等价于[`_.conformsTo`](#conformsTo)。（注：关于偏应用大家可以自己到google上搜索一下）。

#### 添加版本

4.0.0

#### 参数

1.  `source` _(Object)_: 包含断言属性值的对象。

#### 返回

_(Function)_: 返回新的函数。

#### 例子


```js
var objects = [
  { 'a': 2, 'b': 1 },
  { 'a': 1, 'b': 2 }
];
 
_.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
// => [{ 'a': 1, 'b': 2 }]

```