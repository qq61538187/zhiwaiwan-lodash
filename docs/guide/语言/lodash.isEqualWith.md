### `_.isEqualWith(value, other, [customizer])`[​](#_isequalwithvalue-other-customizer "_isequalwithvalue-other-customizer的直接链接")

这个方法类似[`_.isEqual`](#isEqual)。 除了它接受一个 `customizer` 用来定制比较值。 如果 `customizer` 返回 `undefined` 将会比较处理方法代替。 `customizer` 会传入6个参数：_(objValue, othValue \[, index|key, object, other, stack\])_

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 用来比较的值。
2.  `other` _(\*)_: 另一个用来比较的值。
3.  `[customizer]` _(Function)_: 用来定制比较值的函数。

#### 返回

_(boolean)_: 如果 两个值完全相同，那么返回 `true`，否则返回 `false`。

#### 例子

```js
function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}
 
function customizer(objValue, othValue) {
  if (isGreeting(objValue) && isGreeting(othValue)) {
    return true;
  }
}
 
var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];
 
_.isEqualWith(array, other, customizer);
// => true

```