### `_.setWith(object, path, value, [customizer])`[​](#_setwithobject-path-value-customizer "_setwithobject-path-value-customizer的直接链接")

这个方法类似[`_.set`](#set)，除了它接受一个 `customizer`，调用生成对象的 `path`。 如果 `customizer` 返回 `undefined` 将会有它的处理方法代替。 `customizer` 调用3个参数： _(nsValue, key, nsObject)_。  
  
**注意:** 这个方法会改变 `object`.

#### 添加版本

4.0.0

#### 参数

1.  `object` _(Object)_: 要修改的对象。
2.  `path` _(Array|string)_: 要设置的对象路径。
3.  `value` _(\*)_: 要设置的值。
4.  `[customizer]` _(Function)_: 这个函数用来定制分配的值。

#### 返回

_(Object)_: 返回 `object`。

#### 例子

```js
var object = {};
 
_.setWith(object, '[0][1]', 'a', Object);
// => { '0': { '1': 'a' } }

```