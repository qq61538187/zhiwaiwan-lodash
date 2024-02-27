### `_.flattenDepth(array, [depth=1])`[​](#_flattendeptharray-depth1 "_flattendeptharray-depth1的直接链接")

根据 `depth` 递归减少 `array` 的嵌套层级

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 需要减少嵌套层级的数组。
2.  `[depth=1]` _(number)_:最多减少的嵌套层级数。

#### 返回值

_(Array)_: 返回减少嵌套层级后的新数组。

#### 例子

```js
var array = [1, [2, [3, [4]], 5]];
 
_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
 
_.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]

```