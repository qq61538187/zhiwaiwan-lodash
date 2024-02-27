### `_.propertyOf(object)`[​](#_propertyofobject "_propertyofobject的直接链接")

[`_.property`](#property)的反相版本。 这个方法创建的函数返回给定 path 在`object`上的值。

#### 添加版本

3.0.0

#### 参数

1.  `object` _(Object)_: 要检索的对象。

#### 返回

_(Function)_: 返回新的函数。

#### 例子

```js

var array = [0, 1, 2],
    object = { 'a': array, 'b': array, 'c': array };
 
_.map(['a[2]', 'c[0]'], _.propertyOf(object));
// => [2, 0]
 
_.map([['a', '2'], ['c', '0']], _.propertyOf(object));
// => [2, 0]


```