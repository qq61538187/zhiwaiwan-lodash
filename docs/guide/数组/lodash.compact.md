### `_.compact(array)`[​](#_compactarray "_compactarray的直接链接")

创建一个新数组，包含原数组中所有的非假值元素。例如`false`, `null`,`0`, `""`, `undefined`, 和 `NaN` 都是被认为是“假值”。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 待处理的数组

#### 返回值

_(Array)_: 返回过滤掉假值的新数组。

#### 例子

 ```js
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
 ```