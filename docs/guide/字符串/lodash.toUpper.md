### `_.toUpper([string=''])`[​](#_toupperstring "_toupperstring的直接链接")

转换整个`string`字符串的字符为大写，类似[String#toUpperCase](https://mdn.io/toUpperCase).

#### 添加版本

4.0.0

#### 参数

1.  `[string='']` _(string)_: 要转换的字符串。

#### 返回

_(string)_: 返回大写的字符串。

#### 例子

```js
_.toUpper('--foo-bar--');
// => '--FOO-BAR--'
 
_.toUpper('fooBar');
// => 'FOOBAR'
 
_.toUpper('__foo_bar__');
// => '__FOO_BAR__'

```