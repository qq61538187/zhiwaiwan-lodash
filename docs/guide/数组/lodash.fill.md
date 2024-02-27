### `_.fill(array, value, [start=0], [end=array.length])`[​](#_fillarray-value-start0-endarraylength "_fillarray-value-start0-endarraylength的直接链接")

使用 `value` 值来填充（替换） `array`，从`start`位置开始, 到`end`位置结束（但不包含`end`位置）。

**Note:** 这个方法会改变 `array`（注：不是创建新数组）。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要填充改变的数组。
2.  `value` _(\*)_: 填充给 `array` 的值。
3.  `[start=0]` _(number)_: 开始位置（默认0）。
4.  `[end=array.length]` _(number)_:结束位置（默认array.length）。

#### 返回值

_(Array)_: 返回 `array`。

#### 例子

```js
var array = [1, 2, 3];
 
_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']
 
_.fill(Array(3), 2);
// => [2, 2, 2]
 
_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]

```