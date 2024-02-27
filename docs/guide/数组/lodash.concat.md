### `_.concat(array, [values])`[​](#_concatarray-values "_concatarray-values的直接链接")

创建一个新数组，将`array`与任何数组 或 值连接在一起。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 被连接的数组。
2.  `[values]` _(...\*)_: 连接的值。

#### 返回值

_(Array)_: 返回连接后的新数组。

#### 例子

```js
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]


```