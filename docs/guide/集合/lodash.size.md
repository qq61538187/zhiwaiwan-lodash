### `_.size(collection)`[​](#_sizecollection "_sizecollection的直接链接")

返回`collection`（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数。

#### 添加版本

0.1.0

#### 参数

1.  `collection` _(Array|Object)_: 要检查的集合

#### 返回

_(number)_: 返回集合的长度。

#### 例子

```js
_.size([1, 2, 3]);
// => 3
 
_.size({ 'a': 1, 'b': 2 });
// => 2
 
_.size('pebbles');
// => 7

```