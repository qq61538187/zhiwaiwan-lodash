### `_.isObject(value)`[​](#_isobjectvalue "_isobjectvalue的直接链接")

检查 `value` 是否为 `Object` 的[language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)。 _(例如： arrays, functions, objects, regexes,`new Number(0)`, 以及 `new String('')`)_

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 为一个对象，那么返回 `true`，否则返回 `false`。

#### 例子

```js
_.isObject({});
// => true
 
_.isObject([1, 2, 3]);
// => true
 
_.isObject(_.noop);
// => true
 
_.isObject(null);
// => false

```