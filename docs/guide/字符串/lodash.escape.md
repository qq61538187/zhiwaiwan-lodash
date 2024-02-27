### `_.escape([string=''])`[​](#_escapestring "_escapestring的直接链接")

转义`string`中的 "&", "<", ">", '"', "'", 和 "\`" 字符为HTML实体字符。  
  
**注意:** 不会转义其他字符。如果需要，可以使用第三方库，例如[_he_](https://mths.be/he)。  
  
虽然 ">" 是对称转义的，字符如 ">" 和 "/" 没有特殊的意义，所以不需要在 HTML 转义。 除非它们是标签的一部分，或者是不带引号的属性值。 查看[Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands) 的文章 _(under "semi-related fun fact")_ 了解详情 。  
  
在 IE < `9` 中转义引号，因为会中断属性值或 HTML 注释，查看[HTML5 Security Cheatsheet](https://html5sec.org/) 的[#59](https://html5sec.org/#59),[#102](https://html5sec.org/#102),[#108](https://html5sec.org/#108), 和[#133](https://html5sec.org/#133), 以及[#133](https://html5sec.org/#133) 了解详情。  
  
当解析 HTML 时，总应该在[属性值上使用引号](http://wonko.com/post/html-escaping) 以减少 XSS 的可能性。

#### 添加版本

0.1.0

#### 参数

1.  `[string='']` _(string)_: 要转义的字符串。

#### 返回

_(string)_: 返回转义后的字符串。

#### 例子

```js
_.escape('fred, barney, & pebbles');
// => 'fred, barney, & pebbles'

```