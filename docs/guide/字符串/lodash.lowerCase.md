### `_.lowerCase([string=''])`[​](#_lowercasestring "_lowercasestring的直接链接")

转换字符串`string`以空格分开单词，并转换为小写。

#### 添加版本

4.0.0

#### 参数

1.  `[string='']` _(string)_: 要转换的字符串。

#### 返回

_(string)_: 返回转换后的字符串。

#### 例子

```js
_.lowerCase('--Foo-Bar--');
// => 'foo bar'
 
_.lowerCase('fooBar');
// => 'foo bar'
 
_.lowerCase('__FOO_BAR__');
// => 'foo bar'


```