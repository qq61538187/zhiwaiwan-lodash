### `_.snakeCase([string=''])`[​](#_snakecasestring "_snakecasestring的直接链接")

转换字符串`string`为[snake case](https://en.wikipedia.org/wiki/Snake_case).

#### 添加版本

3.0.0

#### 参数

1.  `[string='']` _(string)_: 要转换的字符串。

#### 返回

_(string)_: 返回转换后的字符串。

#### 例子

```js
_.snakeCase('Foo Bar');
// => 'foo_bar'
 
_.snakeCase('fooBar');
// => 'foo_bar'
 
_.snakeCase('--FOO-BAR--');
// => 'foo_bar'

```