### `_.set(object, path, value)`[​](#_setobject-path-value "_setobject-path-value的直接链接")

设置 `object`对象中对应 `path` 属性路径上的值，如果`path`不存在，则创建。 缺少的索引属性会创建为数组，而缺少的属性会创建为对象。 使用[`_.setWith`](#setWith) 定制`path`创建。  
  
**Note:** 这个方法会改变 `object`。

#### 添加版本

3.7.0

#### 参数

1.  `object` _(Object)_: 要修改的对象。
2.  `path` _(Array|string)_: 要设置的对象路径。
3.  `value` _(\*)_: 要设置的值。

#### 返回

_(Object)_: 返回 `object`。

#### 例子

```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);
// => 4
 
_.set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z);
// => 5

```