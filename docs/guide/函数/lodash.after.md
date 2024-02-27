### `_.after(n, func)`[​](#_aftern-func "_aftern-func的直接链接")

[`_.before`](#before)的反向函数;此方法创建一个函数，当他被调用`n`或更多次之后将马上触发`func` 。

#### 添加版本

0.1.0

#### 参数

1.  `n` _(number)_: `func` 方法应该在调用多少次后才执行。
2.  `func` _(Function)_: 用来限定的函数。

#### 返回

_(Function)_: 返回新的限定函数。

#### 例子

```js
var saves = ['profile', 'settings'];
 
var done = _.after(saves.length, function() {
  console.log('done saving!');
});
 
_.forEach(saves, function(type) {
  asyncSave({ 'type': type, 'complete': done });
});
// => Logs 'done saving!' after the two async saves have completed.

```