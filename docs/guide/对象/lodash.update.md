### `_.update(object, path, updater)`[​](#_updateobject-path-updater "_updateobject-path-updater的直接链接")

该方法类似[`_.set`](#set)，除了接受`updater`以生成要设置的值。使用[`_.updateWith`](#updateWith)来自定义生成的新`path`。`updater`调用1个参数：_(value)_。  
  
**Note:** 这个方法会改变 `object`。

#### 添加版本

4.6.0

#### 参数

1.  `object` _(Object)_: 要修改的对象。
2.  `path` _(Array|string)_: 要设置属性的路径。
3.  `updater` _(Function)_: 用来生成设置值的函数。

#### 返回

_(Object)_: 返回 `object` 。

#### 例子

```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.update(object, 'a[0].b.c', function(n) { return n * n; });
console.log(object.a[0].b.c);
// => 9
 
_.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
console.log(object.x[0].y.z);
// => 0

```