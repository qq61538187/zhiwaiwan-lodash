### `_.forOwnRight(object, [iteratee=_.identity])`[​](#_forownrightobject-iteratee_identity "_forownrightobject-iteratee_identity的直接链接")

这个方法类似[`_.forOwn`](#forOwn)。 除了它是反方向开始遍历`object`的。

#### 添加版本

2.0.0

#### 参数

1.  `object` _(Object)_: 要遍历的对象。
2.  `[iteratee=_.identity]` _(Function)_: 每次迭代时调用的函数。

#### 返回

_(Object)_: 返回 `object`。

#### 例子

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.forOwnRight(new Foo, function(value, key) {
  console.log(key);
});
// =>  输出 'b' 然后 'a'， `_.forOwn` 会输出 'a' 然后 'b'

```