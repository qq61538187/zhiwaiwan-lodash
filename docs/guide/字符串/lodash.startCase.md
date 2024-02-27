### `_.startCase([string=''])`[​](#_startcasestring "_startcasestring的直接链接")

转换 `string` 字符串为[start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).

#### 添加版本

3.1.0

#### 参数

1.  `[string='']` _(string)_: 要转换的字符串。

#### 返回

_(string)_: 返回转换后的字符串。

#### 例子

```js
_.startCase('--foo-bar--');
// => 'Foo Bar'
 
_.startCase('fooBar');
// => 'Foo Bar'
 
_.startCase('__FOO_BAR__');
// => 'FOO BAR'

```