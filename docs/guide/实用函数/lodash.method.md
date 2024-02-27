### `_.method(path, [args])`[​](#_methodpath-args "_methodpath-args的直接链接")

创建一个调用给定对象 `path` 上的函数。 任何附加的参数都会传入这个调用函数中。

#### 添加版本

3.7.0

#### 参数

1.  `path` _(Array|string)_: 调用函数所在对象的路径。
2.  `[args]` _(...\*)_: 传递给调用函数的参数。

#### 返回

_(Function)_: 返回新的调用函数。

#### 例子

```js
var objects = [
  { 'a': { 'b': _.constant(2) } },
  { 'a': { 'b': _.constant(1) } }
];
 
_.map(objects, _.method('a.b'));
// => [2, 1]
 
_.map(objects, _.method(['a', 'b']));
// => [2, 1]

```