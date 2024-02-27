### `_.toLower([string=''])`[​](#_tolowerstring "_tolowerstring的直接链接")

转换整个`string`字符串的字符为小写，类似[String#toLowerCase](https://mdn.io/toLowerCase)。

#### 添加版本

4.0.0

#### 参数

1.  `[string='']` _(string)_: 要转换的字符串。

#### 返回

_(string)_: 返回小写的字符串。

#### 例子

```js
_.toLower('--Foo-Bar--');
// => '--foo-bar--'
 
_.toLower('fooBar');
// => 'foobar'
 
_.toLower('__FOO_BAR__');
// => '__foo_bar__'

```