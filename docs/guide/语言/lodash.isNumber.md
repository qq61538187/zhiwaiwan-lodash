### `_.isNumber(value)`[​](#_isnumbervalue "_isnumbervalue的直接链接")

检查 `value` 是否是原始`Number`数值型 或者 对象。  
  
**注意:** 要排除 `Infinity`, `-Infinity`, 以及 `NaN` 数值类型，用[`_.isFinite`](#isFinite) 方法。

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 为一个数值，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isNumber(3);
// => true
 
_.isNumber(Number.MIN_VALUE);
// => true
 
_.isNumber(Infinity);
// => true
 
_.isNumber('3');
// => false
```