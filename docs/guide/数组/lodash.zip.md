### `_.zip([arrays])`[​](#_ziparrays "_ziparrays的直接链接")

创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。

#### 添加版本

0.1.0

#### 参数

1.  `[arrays]` _(...Array)_: 要处理的数组。

#### 返回

_(Array)_: 返回分组元素的新数组。

#### 例子

```js
_.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]

```