### `_.mergeWith(object, sources, customizer)`[​](#_mergewithobject-sources-customizer "_mergewithobject-sources-customizer的直接链接")

该方法类似[`_.merge`](#merge)，除了它接受一个 `customizer`，调用以产生目标对象和来源对象属性的合并值。如果`customizer` 返回 `undefined`，将会由合并处理方法代替。`customizer`调用与7个参数：_(objValue, srcValue, key, object, source, stack)_。  
  
**Note:** 这方法会改变对象 `object`.

#### 添加版本

4.0.0

#### 参数

1.  `object` _(Object)_: 目标对象。
2.  `[sources]` _(...Object)_: 来源对象。
3.  `customizer` _(Function)_: 这个函数定制合并值。

#### 返回

_(Object)_: 返回 `object`。

#### 例子


```js
function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}
 
var object = { 'a': [1], 'b': [2] };
var other = { 'a': [3], 'b': [4] };
 
_.mergeWith(object, other, customizer);
// => { 'a': [1, 3], 'b': [2, 4] }

```