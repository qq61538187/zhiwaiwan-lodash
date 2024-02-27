### `_.invert(object)`[​](#_invertobject "_invertobject的直接链接")

创建一个`object`键值倒置后的对象。 如果 `object` 有重复的值，后面的值会覆盖前面的值。

#### 添加版本

0.7.0

#### 参数

1.  `object` _(Object)_: 要键值倒置对象。

#### 返回

_(Object)_: 返回新的键值倒置后的对象。

#### 例子

 ```js
var object = { 'a': 1, 'b': 2, 'c': 1 };
 
_.invert(object);
// => { '1': 'c', '2': 'b' }

 ```