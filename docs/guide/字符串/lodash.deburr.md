### `_.deburr([string=''])`[​](#_deburrstring "_deburrstring的直接链接")

转换字符串`string`中[拉丁语-1补充字母](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table) 和[拉丁语扩展字母-A](https://en.wikipedia.org/wiki/Latin_Extended-A) 为基本的拉丁字母，并且去除组合变音标记。

#### 添加版本

3.0.0

#### 参数

1.  `[string='']` _(string)_: 要处理的字符串。

#### 返回

_(string)_: 返回处理后的字符串。

#### 例子

  
```js
_.deburr('déjà vu');
// => 'deja vu'

```