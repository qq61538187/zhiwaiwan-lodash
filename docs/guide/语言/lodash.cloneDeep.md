### `_.cloneDeep(value)`[​](#_clonedeepvalue "_clonedeepvalue的直接链接")

这个方法类似[`_.clone`](#clone)，除了它会递归拷贝 `value`。（注：也叫深拷贝）。

#### 添加版本

1.0.0

#### 参数

1.  `value` _(\*)_: 要深拷贝的值。

#### 返回

_(\*)_: 返回拷贝后的值。

#### 例子

```js
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false

```