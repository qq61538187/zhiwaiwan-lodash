### `_.eq(value, other)`[​](#_eqvalue-other "_eqvalue-other的直接链接")

执行[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) 比较两者的值，来确定它们是否相等。

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要比较的值。
2.  `other` _(\*)_: 另一个要比较的值。

#### 返回

_(boolean)_: 如果两个值相等返回 `true` ，否则返回 `false` 。

#### 例子


```js
var object = { 'a': 1 };
var other = { 'a': 1 };
 
_.eq(object, object);
// => true
 
_.eq(object, other);
// => false
 
_.eq('a', 'a');
// => true
 
_.eq('a', Object('a'));
// => false
 
_.eq(NaN, NaN);
// => true

```