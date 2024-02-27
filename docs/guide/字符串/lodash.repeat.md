### `_.repeat([string=''], [n=1])`[​](#_repeatstring-n1 "_repeatstring-n1的直接链接")

重复 N 次给定字符串。

#### 添加版本

3.0.0

#### 参数

1.  `[string='']` _(string)_: 要重复的字符串。
2.  `[n=1]` _(number)_: 重复的次数。

#### 返回

_(string)_: 返回重复的字符串。

#### 例子

```js
_.repeat('*', 3);
// => '***'
 
_.repeat('abc', 2);
// => 'abcabc'
 
_.repeat('abc', 0);
// => ''

```