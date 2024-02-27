### `_.unset(object, path)`[​](#_unsetobject-path "_unsetobject-path的直接链接")

移除`object`对象 `path` 路径上的属性。  
  
**注意:** 这个方法会改变源对象 `object`。

#### 添加版本

4.0.0

#### 参数

1.  `object` _(Object)_: 要修改的对象。
2.  `path` _(Array|string)_: 要移除的对象路径。

#### 返回

_(boolean)_: 如果移除成功，那么返回 `true` ，否则返回 `false`。

#### 例子

```js
var object = { 'a': [{ 'b': { 'c': 7 } }] };
_.unset(object, 'a[0].b.c');
// => true
 
console.log(object);
// => { 'a': [{ 'b': {} }] };
 
_.unset(object, ['a', '0', 'b', 'c']);
// => true
 
console.log(object);
// => { 'a': [{ 'b': {} }] };

```