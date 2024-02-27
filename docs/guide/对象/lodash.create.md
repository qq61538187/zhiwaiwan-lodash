### `_.create(prototype, [properties])`[​](#_createprototype-properties "_createprototype-properties的直接链接")

创建一个继承 `prototype` 的对象。 如果提供了 `prototype`，它的可枚举属性会被分配到创建的对象上。

#### 添加版本

2.3.0

#### 参数

1.  `prototype` _(Object)_: 要继承的对象。
2.  `[properties]` _(Object)_: 待分配的属性。

#### 返回

_(Object)_: 返回新对象。

#### Example

```js
function Shape() {
  this.x = 0;
  this.y = 0;
}
 
function Circle() {
  Shape.call(this);
}
 
Circle.prototype = _.create(Shape.prototype, {
  'constructor': Circle
});
 
var circle = new Circle;
circle instanceof Circle;
// => true
 
circle instanceof Shape;
// => true

```