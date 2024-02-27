### `_.updateWith(object, path, updater, [customizer])`[​](#_updatewithobject-path-updater-customizer "_updatewithobject-path-updater-customizer的直接链接")

该方法类似[`_.update`](#update)，不同之处在于它接受`customizer`，调用来生成新的对象的`path`。如果`customizer`返回`undefined`，路径创建由该方法代替。`customizer`调用有三个参数：_(nsValue, key, nsObject)_ 。  
  
**Note:** 这个方法会改变 `object`.

#### 添加版本

4.6.0

#### 参数

1.  `object` _(Object)_: 要修改的对象。
2.  `path` _(Array|string)_: 要设置属性的路径。
3.  `updater` _(Function)_: 用来生成设置值的函数。
4.  `[customizer]` _(Function)_: 用来自定义分配值的函数。

#### 返回

_(Object)_: 返回 `object`.

#### 例子

```js
var object = {};
 
_.updateWith(object, '[0][1]', _.constant('a'), Object);
// => { '0': { '1': 'a' } }

```