### `_.words([string=''], [pattern])`[​](#_wordsstring-pattern "_wordsstring-pattern的直接链接")

拆分字符串`string`中的词为数组 。

#### 添加版本

3.0.0

#### 参数

1.  `[string='']` _(string)_: 要拆分的字符串。
2.  `[pattern]` _(RegExp|string)_: 匹配模式。

#### 返回

_(Array)_: 返回拆分`string`后的数组。

#### 例子

```js
_.words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']
 
_.words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']

```