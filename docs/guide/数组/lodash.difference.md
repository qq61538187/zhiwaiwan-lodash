### `_.difference(array, [values])`[​](#_differencearray-values "_differencearray-values的直接链接")

创建一个具有唯一`array`值的数组，每个值不包含在其他给定的数组中。（注：即创建一个新数组，这个数组中的值，为第一个数字（`array` 参数）排除了给定数组中的值。）该方法使用[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)做相等比较。结果值的顺序是由第一个数组中的顺序确定。  
  
**注意:** 不像[`_.pullAll`](#pullAll)，这个方法会返回一个新数组。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要检查的数组。
2.  `[values]` _(...Array)_: 排除的值。

#### 返回值

_(Array)_: 返回一个过滤值后的新数组。

#### 例子

```js
  _.difference([3, 2, 1], [4, 2]);
  // => [3, 1]
```