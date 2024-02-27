### `_.isSymbol(value)`[​](#_issymbolvalue "_issymbolvalue的直接链接")

检查 `value` 是否是原始 `Symbol` 或者对象。

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 为一个symbol，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isSymbol(Symbol.iterator);
// => true
 
_.isSymbol('abc');
// => false

```