### `_.kebabCase([string=''])`[​](#_kebabcasestring "_kebabcasestring的直接链接")

转换字符串`string`为[kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).

#### 添加版本

3.0.0

#### 参数

1.  `[string='']` _(string)_: 要转换的字符串。

#### 返回

_(string)_: 返回转换后的字符串。

#### 例子

```js

_.kebabCase('Foo Bar');
// => 'foo-bar'
 
_.kebabCase('fooBar');
// => 'foo-bar'
 
_.kebabCase('__FOO_BAR__');
// => 'foo-bar'


```