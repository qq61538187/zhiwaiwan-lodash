### `_.upperCase([string=''])`[​](#_uppercasestring "_uppercasestring的直接链接")

转换字符串`string`为 空格 分隔的大写单词。

#### 添加版本

4.0.0

#### 参数

1.  `[string='']` _(string)_: 要转换的字符串。

#### 返回

_(string)_: 返回大写单词。

#### 例子

```js
_.upperCase('--foo-bar');
// => 'FOO BAR'
 
_.upperCase('fooBar');
// => 'FOO BAR'
 
_.upperCase('__foo_bar__');
// => 'FOO BAR'

```