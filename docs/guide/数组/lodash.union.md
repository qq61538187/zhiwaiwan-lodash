### `_.union([arrays])`[​](#_unionarrays "_unionarrays的直接链接")

创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)做等值比较。（注： `arrays`（数组）的并集，按顺序返回，返回数组的元素是唯一的）

#### 添加版本

0.1.0

#### 参数

1.  `[arrays]` _(...Array)_: 要检查的数组。

#### 返回

_(Array)_: 返回一个新的联合数组。

#### 例子


```js
_.union([2], [1, 2]);
// => [2, 1]

```