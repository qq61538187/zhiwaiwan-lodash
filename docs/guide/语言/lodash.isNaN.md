### `_.isNaN(value)`[​](#_isnanvalue "_isnanvalue的直接链接")

检查 `value` 是否是 `NaN`。  
  
**注意:** 这个方法基于[`Number.isNaN`](https://mdn.io/Number/isNaN)，和全局的[`isNaN`](https://mdn.io/isNaN) 不同之处在于，全局的[`isNaN`](https://mdn.io/isNaN)对 于 `undefined` 和其他非数字的值返回 `true`。

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 是一个 `NaN`，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isNaN(NaN);
// => true
 
_.isNaN(new Number(NaN));
// => true
 
isNaN(undefined);
// => true
 
_.isNaN(undefined);
// => false

```