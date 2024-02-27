### `_.property(path)`[​](#_propertypath "_propertypath的直接链接")

创建一个返回给定对象的 `path` 的值的函数。

#### 添加版本

2.4.0

#### 参数

1.  `path` _(Array|string)_: 要得到值的属性路径。

#### 返回

_(Function)_: 返回新的函数。

#### 例子

```js
var objects = [
  { 'a': { 'b': 2 } },
  { 'a': { 'b': 1 } }
];
 
_.map(objects, _.property('a.b'));
// => [2, 1]
 
_.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
// => [1, 2]

```