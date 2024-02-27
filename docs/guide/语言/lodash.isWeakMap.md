### `_.isWeakMap(value)`[​](#_isweakmapvalue "_isweakmapvalue的直接链接")

检查 `value` 是否是 `WeakMap` 对象。

#### 添加版本

4.3.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 为一个 `WeakMap` 对象 ，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isWeakMap(new WeakMap);
// => true
 
_.isWeakMap(new Map);
// => false

```