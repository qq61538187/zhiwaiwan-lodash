### `_.fromPairs(pairs)`[​](#_frompairspairs "_frompairspairs的直接链接")

与[`_.toPairs`](#toPairs)正好相反；这个方法返回一个由键值对`pairs`构成的对象。

#### 引入版本

1.0.1

#### 参数

1.  `pairs` _(Array)_: 键值对`pairs`。

#### 返回值

_(Object)_: 返回一个新对象。

#### 例子

```js
_.fromPairs([['fred', 30], ['barney', 40]]);
// => { 'fred': 30, 'barney': 40 }

```