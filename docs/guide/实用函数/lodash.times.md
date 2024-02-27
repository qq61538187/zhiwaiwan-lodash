### `_.times(n, [iteratee=_.identity])`[​](#_timesn-iteratee_identity "_timesn-iteratee_identity的直接链接")

调用 iteratee `n` 次，每次调用返回的结果存入到数组中。 iteratee 调用入1个参数： _(index)_。

#### 添加版本

0.1.0

#### 参数

1.  `n` _(number)_: 调用 `iteratee` 的次数。
2.  `[iteratee=_.identity]` _(Function)_: 每次迭代调用的函数。

#### 返回

_(Array)_: 返回调用结果的数组。

#### 例子


```js
_.times(3, String);
// => ['0', '1', '2']
 
 _.times(4, _.constant(0));
// => [0, 0, 0, 0]

```