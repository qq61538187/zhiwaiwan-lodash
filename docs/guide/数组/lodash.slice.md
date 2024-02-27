### `_.slice(array, [start=0], [end=array.length])`[​](#_slicearray-start0-endarraylength "_slicearray-start0-endarraylength的直接链接")

裁剪数组`array`，从 `start` 位置开始到`end`结束，但不包括 `end` 本身的位置。  
  
**Note:** 这个方法用于代替[`Array#slice`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 来确保数组正确返回。

#### 添加版本

3.0.0

#### 参数

1.  `array` _(Array)_: 要裁剪数组。
2.  `[start=0]` _(number)_: 开始位置。
3.  `[end=array.length]` _(number)_: 结束位置。

#### 返回

_(Array)_: 返回 数组`array` 裁剪部分的新数组。