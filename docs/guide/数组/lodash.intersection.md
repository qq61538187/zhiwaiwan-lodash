### `_.intersection([arrays])`[​](#_intersectionarrays "_intersectionarrays的直接链接")

创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)进行相等性比较。（注：可以理解为给定数组的交集）

#### 引入版本

1.0.1

#### 参数

1.  `[arrays]` _(...Array)_: 待检查的数组。

#### 返回值

_(Array)_: 返回一个包含所有传入数组交集元素的新数组。

#### 例子

```js
_.intersection([2, 1], [4, 2], [1, 2]);
// => [2]

```