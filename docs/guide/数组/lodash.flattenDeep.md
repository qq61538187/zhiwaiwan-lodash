### `_.flattenDeep(array)`[​](#_flattendeeparray "_flattendeeparray的直接链接")

将`array`递归为一维数组。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 需要处理的数组。

#### 返回值

_(Array)_: 返回一个的新一维数组。

#### 例子

```js
_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]

```