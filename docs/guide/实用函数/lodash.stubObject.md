### `_.stubObject()`[​](#_stubobject "_stubobject的直接链接")

这个方法返回一个空对象.

#### 添加版本

4.13.0

#### 返回

_(Object)_: 返回新的空对象。

#### 例子

```js
var objects = _.times(2, _.stubObject);
 
console.log(objects);
// => [{}, {}]
 
console.log(objects[0] === objects[1]);
// => false

```