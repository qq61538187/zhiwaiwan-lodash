### `_.identity(value)`[​](#_identityvalue "_identityvalue的直接链接")

这个方法返回首个提供的参数。

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 任何值。

#### 返回

_(\*)_: 返回 `value`.

#### 例子

```js
var object = { 'a': 1 };
 
console.log(_.identity(object) === object);
// => true

```