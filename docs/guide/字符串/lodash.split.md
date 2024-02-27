### `_.split([string=''], separator, [limit])`[​](#_splitstring-separator-limit "_splitstring-separator-limit的直接链接")

根据`separator` 拆分字符串`string`。  
  
**注意:** 这个方法基于[`String#split`](https://mdn.io/String/split).

#### 添加版本

4.0.0

#### 参数

1.  `[string='']` _(string)_: 要拆分的字符串。
2.  `separator` _(RegExp|string)_: 拆分的分隔符。
3.  `[limit]` _(number)_: 限制结果的数量。

#### 返回

_(Array)_: 返回拆分部分的字符串的数组。

#### 例子

```js
_.split('a-b-c', '-', 2);
// => ['a', 'b']

```