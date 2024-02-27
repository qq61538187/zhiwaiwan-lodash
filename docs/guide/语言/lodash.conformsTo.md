### `_.conformsTo(object, source)`[​](#_conformstoobject-source "_conformstoobject-source的直接链接")

通过调用断言`source`的属性与 `object` 的相应属性值，检查 `object`是否符合 `source`。当`source`偏应用时，这种方法和[`_.conforms`](#conforms)函数是等价的。  
  
**注意:** 当`source`为偏应用时，这种方法等价于[`_.conforms`](#conforms)。（注：关于偏应用大家可以自己到google上搜索一下）。

#### 添加版本

4.14.0

#### 参数

1.  `object` _(Object)_: 要检查的对象。
2.  `source` _(Object)_: 要断言属性是否符合的对象。

#### 返回

_(boolean)_: 如果 `object` 符合，返回 `true`，否则 `false`。

#### 例子

```js
var object = { 'a': 1, 'b': 2 };
 
_.conformsTo(object, { 'b': function(n) { return n > 1; } });
// => true
 
_.conformsTo(object, { 'b': function(n) { return n > 2; } });
// => false

```