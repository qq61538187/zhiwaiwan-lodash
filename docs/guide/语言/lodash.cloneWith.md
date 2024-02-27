### `_.cloneWith(value, [customizer])`[​](#_clonewithvalue-customizer "_clonewithvalue-customizer的直接链接")

这个方法类似[`_.clone`](#clone)，除了它接受一个 `customizer` 定制返回的克隆值。 如果 `customizer` 返回 `undefined` 将会使用拷贝方法代替处理。 customizer 调用4个参数： _(value \[, index|key, object, stack\])_。

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要克隆的值。
2.  `[customizer]` _(Function)_: 用来自定义克隆的函数。

#### 返回

_(\*)_: 返回克隆值。

#### 例子

```js
function customizer(value) {
  if (_.isElement(value)) {
    return value.cloneNode(false);
  }
}
 
var el = _.cloneWith(document.body, customizer);
 
console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 0

```