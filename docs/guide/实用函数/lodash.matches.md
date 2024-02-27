### `_.matches(source)`[​](#_matchessource "_matchessource的直接链接")

创建一个深比较的方法来比较给定的对象和 `source` 对象。 如果给定的对象拥有相同的属性值返回 `true`，否则返回 `false`。  
  
**注意:** 创建的函数相当于[`_.isMatch`](#isMatch)应用 `source` 。  
  
部分比较匹配空数组和空对象源值，分别针对任何数组或对象的价值。见[`_.isEqual`](#isEqual)支持的价值比较的列表。

#### 添加版本

3.0.0

#### 参数

1.  `source` _(Object)_: 要匹配属性值的源对象。

#### 返回

_(Function)_: 返回新的函数。

#### 例子

 ```js
var objects = [
  { 'a': 1, 'b': 2, 'c': 3 },
  { 'a': 4, 'b': 5, 'c': 6 }
];
 
_.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
// => [{ 'a': 4, 'b': 5, 'c': 6 }]

 ```