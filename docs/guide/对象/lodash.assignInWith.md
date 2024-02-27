### `_.assignInWith(object, sources, [customizer])`[​](#_assigninwithobject-sources-customizer "_assigninwithobject-sources-customizer的直接链接")

这个方法类似[`_.assignIn`](#assignIn)， 除了它接受一个 `customizer` ，被调用以产生所分配的值。 如果 `customizer` 返回 `undefined` 将会由分配处理方法代替。 `customizer` 会传入5个参数： _(objValue, srcValue, key, object, source)_。  
  
**Note:** 这方法会改变 `object`。

#### 添加版本

4.0.0

#### Aliases

_\_.extendWith_

#### 参数

1.  `object` _(Object)_: 目标对象。
2.  `sources` _(...Object)_: 来源对象。
3.  `[customizer]` _(Function)_: 这个函数用来自定义分配的值。

#### 返回

_(Object)_: 返回 `object`。

#### 例子

```js
function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}
 
var defaults = _.partialRight(_.assignInWith, customizer);
 
defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }

```