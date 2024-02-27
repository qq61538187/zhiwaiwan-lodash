### `_.camelCase([string=''])`[​](#_camelcasestring "_camelcasestring的直接链接")

转换字符串`string`为[驼峰写法](https://en.wikipedia.org/wiki/CamelCase)。

#### 添加版本

3.0.0

#### 参数

1.  `[string='']` _(string)_: 要转换的字符串。

#### 返回

_(string)_: 返回驼峰写法的字符串。

#### 例子

```js

_.camelCase('Foo Bar');
// => 'fooBar'
 
_.camelCase('--foo-bar--');
// => 'fooBar'
 
_.camelCase('__FOO_BAR__');
// => 'fooBar'


```