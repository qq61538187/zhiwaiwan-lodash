### `_.uniq(array)`[​](#_uniqarray "_uniqarray的直接链接")

创建一个去重后的`array`数组副本。使用了[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) 做等值比较。只有第一次出现的元素才会被保留。

#### 添加版本

0.1.0

#### 参数

1.  `array` _(Array)_: 要检查的数组。

#### 返回

_(Array)_: 返回新的去重后的数组。

#### 例子

```js
_.uniq([2, 1, 2]);
// => [2, 1]

```