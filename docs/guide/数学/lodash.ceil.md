### `_.ceil(number, [precision=0])`[​](#_ceilnumber-precision0 "_ceilnumber-precision0的直接链接")

根据 `precision`（精度） 向上舍入 `number`。（注： `precision`（精度）可以理解为保留几位小数。）

#### 添加版本

3.10.0

#### 参数

1.  `number` _(number)_: 要向上舍入的值。
2.  `[precision=0]` _(number)_: 向上舍入的的精度。

#### 返回

_(number)_: 返回向上舍入的值。

#### 例子

```js
_.ceil(4.006);
// => 5
 
_.ceil(6.004, 2);
// => 6.01
 
_.ceil(6040, -2);
// => 6100

```