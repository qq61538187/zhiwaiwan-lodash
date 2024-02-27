### `_.parseInt(string, [radix=10])`[​](#_parseintstring-radix10 "_parseintstring-radix10的直接链接")

转换`string`字符串为指定基数的整数。 如果基数是 `undefined` 或者 `0`，则`radix`基数默认是`10`，如果`string`字符串是16进制，则`radix`基数为 `16`。  
  
**注意:** 这个方法与[ES5 implementation](https://es5.github.io/#x15.1.2.2) 的 `parseInt`是一样的。

#### 添加版本

1.1.0

#### 参数

1.  `string` _(string)_: 要转换的字符串。
2.  `[radix=10]` _(number)_:转换基数。

#### 返回

_(number)_: 返回转换后的整数。

#### 例子

```js
_.parseInt('08');
// => 8
 
_.map(['6', '08', '10'], _.parseInt);
// => [6, 8, 10]

```