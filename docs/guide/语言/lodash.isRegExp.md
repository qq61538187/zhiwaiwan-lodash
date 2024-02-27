### `_.isRegExp(value)`[​](#_isregexpvalue "_isregexpvalue的直接链接")

检查 `value` 是否为`RegExp`对象。

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 要检查的值。

#### 返回

_(boolean)_: 如果 `value` 为一个正则表达式，那么返回 `true`，否则返回 `false`。

#### 例子


```js
_.isRegExp(/abc/);
// => true
 
_.isRegExp('/abc/');
// => false

```