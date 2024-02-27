### `_.isEqual(value, other)`[​](#_isequalvalue-other "_isequalvalue-other的直接链接")

执行深比较来确定两者的值是否相等。  
  
\*\*注意: \*\*这个方法支持比较 arrays, array buffers, booleans, date objects, error objects, maps, numbers, `Object` objects, regexes, sets, strings, symbols, 以及 typed arrays. `Object` 对象值比较自身的属性，不包括继承的和可枚举的属性。 **不**支持函数和DOM节点比较。

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 用来比较的值。
2.  `other` _(\*)_: 另一个用来比较的值。

#### 返回

_(boolean)_: 如果 两个值完全相同，那么返回 `true`，否则返回 `false`。

#### 例子

```js
var object = { 'a': 1 };
var other = { 'a': 1 };
 
_.isEqual(object, other);
// => true
 
object === other;
// => false

```