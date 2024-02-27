### `_.dropRight(array, [n=1])`[​](#_droprightarray-n1 "_droprightarray-n1的直接链接")

创建一个切片数组，去除`array`尾部的`n`个元素。（`n`默认值为1。）

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要查询的数组。
2.  `[n=1]` _(number)_: 要去除的元素个数。

#### 返回值

_(Array)_: 返回`array`剩余切片。

#### 例子

```js

_.dropRight([1, 2, 3]);
// => [1, 2]
 
_.dropRight([1, 2, 3], 2);
// => [1]
 
_.dropRight([1, 2, 3], 5);
// => []
 
_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]

```