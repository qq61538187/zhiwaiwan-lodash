### `_.join(array, [separator=','])`[​](#_joinarray-separator- "_joinarray-separator-的直接链接")

将 `array` 中的所有元素转换为由 `separator` 分隔的字符串。

#### 引入版本

1.0.1

#### 参数

1.  `array` _(Array)_: 要转换的数组。
2.  `[separator=',']` _(string)_: 分隔元素。

#### 返回值

_(string)_: 返回连接字符串。

#### 例子

```js
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'

```