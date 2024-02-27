### `_.overSome([predicates=[_.identity]])`[​](#_oversomepredicates_identity "_oversomepredicates_identity的直接链接")

创建一个函数，传入提供的参数的函数并调用 `predicates` 判断是否 **存在** 有真值。

#### 添加版本

4.0.0

#### 参数

1.  `[predicates=[_.identity]]` _(...(Function|Function\[\]))_: 要调用的 predicates。

#### 返回

_(Function)_: 返回新的函数。

#### 例子

```js
var func = _.overSome([Boolean, isFinite]);
 
func('1');
// => true
 
func(null);
// => true
 
func(NaN);
// => false

```