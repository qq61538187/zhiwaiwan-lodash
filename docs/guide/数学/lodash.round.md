### `_.round(number, [precision=0])`[​](#_roundnumber-precision0 "_roundnumber-precision0的直接链接")

根据 `precision`（精度） 四舍五入 `number`。

#### 添加版本

3.10.0

#### 参数

1.  `number` _(number)_: 要四舍五入的数字。
2.  `[precision=0]` _(number)_: 四舍五入的精度。

#### 返回

_(number)_: 返回四舍五入的数字。

#### 例子


```js
_.round(4.006);
// => 4
 
_.round(4.006, 2);
// => 4.01
 
_.round(4060, -2);
// => 4100

```