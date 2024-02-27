### `_.over([iteratees=[_.identity]])`[​](#_overiteratees_identity "_overiteratees_identity的直接链接")

创建一个函数，传入提供的参数的函数并调用 `iteratees` 返回结果。

#### 添加版本

4.0.0

#### 参数

1.  `[iteratees=[_.identity]]` _(...(Function|Function\[\]))_: 要调用的 iteratees。

#### 返回

_(Function)_: 返回新的函数。

#### 例子

```js
var func = _.over([Math.max, Math.min]);
 
func(1, 2, 3, 4);
// => [4, 1]

```