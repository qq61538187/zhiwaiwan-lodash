### `_.clamp(number, [lower], upper)`[​](#_clampnumber-lower-upper "_clampnumber-lower-upper的直接链接")

返回限制在 `lower` 和 `upper` 之间的值。

#### 添加版本

4.0.0

#### 参数

1.  `number` _(number)_: 被限制的值。
2.  `[lower]` _(number)_: 下限。
3.  `upper` _(number)_: 上限。

#### 返回

_(number)_: 返回被限制的值。

#### 例子

```js
_.clamp(-10, -5, 5);
// => -5
 
_.clamp(10, -5, 5);
// => 5

```