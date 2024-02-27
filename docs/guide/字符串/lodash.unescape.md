### `_.unescape([string=''])`[​](#_unescapestring "_unescapestring的直接链接")

[`_.escape`](#escape)的反向版。 这个方法转换`string`字符串中的 HTML 实体 `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, 和 `&#96;` 为对应的字符。  
  
注意: 不会转换其他的 HTML 实体，需要转换可以使用类似 he 的第三方库。

**注意:** 不会转换其他的 HTML 实体，需要转换可以使用第三方库，类似[_he_](https://mths.be/he)。

#### 添加版本

0.6.0

#### 参数

1.  `[string='']` _(string)_: 要转换的字符串。

#### 返回

_(string)_: 返回转换后的字符串。

#### 例子

```js
_.unescape('fred, barney, & pebbles');
// => 'fred, barney, & pebbles'

```