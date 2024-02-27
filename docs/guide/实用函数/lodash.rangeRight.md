### `_.rangeRight([start=0], end, [step=1])`[​](#_rangerightstart0-end-step1 "_rangerightstart0-end-step1的直接链接")

这个方法类似[`_.range`](#range) ， 除了它是降序生成值的。

#### 添加版本

4.0.0

#### 参数

1.  `[start=0]` _(number)_: 开始的范围。
2.  `end` _(number)_: 结束的范围。
3.  `[step=1]` _(number)_:范围的增量 或者 减量。

#### 返回

_(Array)_: 返回范围内数字组成的新数组。

#### 例子

```js
_.rangeRight(4);
// => [3, 2, 1, 0]
 
_.rangeRight(-4);
// => [-3, -2, -1, 0]
 
_.rangeRight(1, 5);
// => [4, 3, 2, 1]
 
_.rangeRight(0, 20, 5);
// => [15, 10, 5, 0]
 
_.rangeRight(0, -4, -1);
// => [-3, -2, -1, 0]
 
_.rangeRight(1, 4, 0);
// => [1, 1, 1]
 
_.rangeRight(0);
// => []

```