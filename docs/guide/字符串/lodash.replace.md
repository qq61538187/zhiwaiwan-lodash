### `_.replace([string=''], pattern, replacement)`[​](#_replacestring-pattern-replacement "_replacestring-pattern-replacement的直接链接")

替换`string`字符串中匹配的`pattern`为给定的`replacement` 。  
  
**注意:** 这个方法基于[`String#replace`](https://mdn.io/String/replace).

#### 添加版本

4.0.0

#### 参数

1.  `[string='']` _(string)_: 待替换的字符串。
2.  `pattern` _(RegExp|string)_: 要匹配的内容。
3.  `replacement` _(Function|string)_: 替换的内容。

#### 返回

_(string)_: 返回替换后的字符串

#### 例子

```js
_.replace('Hi Fred', 'Fred', 'Barney');
// => 'Hi Barney'

```