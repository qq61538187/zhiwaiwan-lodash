### `_.random([lower=0], [upper=1], [floating])`[​](#_randomlower0-upper1-floating "_randomlower0-upper1-floating的直接链接")

产生一个包括 `lower` 与 `upper` 之间的数。 如果只提供一个参数返回一个`0`到提供数之间的数。 如果 `floating` 设为 `true`，或者 `lower` 或 `upper` 是浮点数，结果返回浮点数。  
  
**注意:** JavaScript 遵循 IEEE-754 标准处理无法预料的浮点数结果。

#### 添加版本

0.7.0

#### 参数

1.  `[lower=0]` _(number)_: 下限。
2.  `[upper=1]` _(number)_: 上限。
3.  `[floating]` _(boolean)_: 指定是否返回浮点数。

#### 返回

_(number)_: 返回随机数。

#### 例子

```js
_.random(0, 5);
// => an integer between 0 and 5
 
_.random(5);
// => also an integer between 0 and 5
 
_.random(5, true);
// => a floating-point number between 0 and 5
 
_.random(1.2, 5.2);
// => a floating-point number between 1.2 and 5.2

```