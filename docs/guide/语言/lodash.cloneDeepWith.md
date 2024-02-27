### `_.cloneDeepWith(value, [customizer])`[​](#_clonedeepwithvalue-customizer "_clonedeepwithvalue-customizer的直接链接")

这个方法类似[`_.cloneWith`](#cloneWith)，除了它会递归克隆 `value`。

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 用来递归克隆的值。
2.  `[customizer]` _(Function)_: 用来自定义克隆的函数。

#### 返回

_(\*)_: 返回深度克隆后的值。

#### 例子

```js
function customizer(value) {
  if (_.isElement(value)) {
    return value.cloneNode(true);
  }
}
 
var el = _.cloneDeepWith(document.body, customizer);
 
console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 20

```