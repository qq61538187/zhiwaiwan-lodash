### `_.xor([arrays])`[​](#_xorarrays "_xorarrays的直接链接")

创建一个给定数组唯一值的数组，使用[symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)做等值比较。返回值的顺序取决于他们数组的出现顺序。

#### 添加版本

2.4.0

#### 参数

1.  `[arrays]` _(...Array)_: 要检查的数组。

#### 返回

_(Array)_: 返回过滤值后的新数组。

#### 例子

```js
_.xor([2, 1], [2, 3]);
// => [1, 3]
```