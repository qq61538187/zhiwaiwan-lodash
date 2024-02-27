### `_.negate(predicate)`[​](#_negatepredicate "_negatepredicate的直接链接")

创建一个针对断言函数 `func` 结果取反的函数。 `func` 断言函数被调用的时候，`this` 绑定到创建的函数，并传入对应参数。

#### 添加版本

3.0.0

#### 参数

1.  `predicate` _(Function)_: 需要对结果取反的函数。

#### 返回

_(Function)_: 返回一个新的取反函数。

#### 例子

```js
function isEven(n) {
  return n % 2 == 0;
}
 
_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
// => [1, 3, 5]


```