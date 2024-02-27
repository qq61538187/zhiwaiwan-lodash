### `_.isMatchWith(object, source, [customizer])`[​](#_ismatchwithobject-source-customizer "_ismatchwithobject-source-customizer的直接链接")

这个方法类似[`_.isMatch`](#isMatch)。 除了它接受一个 `customizer` 定制比较的值。 如果 `customizer` 返回 `undefined` 将会比较处理方法代替。 `customizer` 会传入5个参数：_(objValue, srcValue, index|key, object, source)_。

#### 添加版本

4.0.0

#### 参数

1.  `object` _(Object)_: 要检查的对象。
2.  `source` _(Object)_: 属性值相匹配的对象。
3.  `[customizer]` _(Function)_: 这个函数用来定制比较。

#### 返回

_(boolean)_: 如果`object`匹配，那么返回 `true`，否则返回 `false`。

#### 例子


```js
function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}
 
function customizer(objValue, srcValue) {
  if (isGreeting(objValue) && isGreeting(srcValue)) {
    return true;
  }
}
 
var object = { 'greeting': 'hello' };
var source = { 'greeting': 'hi' };
 
_.isMatchWith(object, source, customizer);
// => true

```