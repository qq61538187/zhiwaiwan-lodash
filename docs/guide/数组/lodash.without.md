### `_.without(array, [values])`[​](#_withoutarray-values "_withoutarray-values的直接链接")

创建一个剔除所有给定值的新数组，剔除值的时候，使用[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)做相等比较。  
  
**注意:** 不像[`_.pull`](#pull), 这个方法会返回一个新数组。

#### 添加版本

0.1.0

#### 参数

1.  `array` _(Array)_: 要检查的数组。
2.  `[values]` _(...\*)_: 要剔除的值。

#### 返回

_(Array)_: 返回过滤值后的新数组。

#### 例子

```js
_.without([2, 1, 2, 3], 1, 2);
// => [3]

```