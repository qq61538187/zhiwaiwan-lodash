### `_.overEvery([predicates=[_.identity]])`[​](#_overeverypredicates_identity "_overeverypredicates_identity的直接链接")

建一个函数，传入提供的参数的函数并调用 `predicates` 判断是否 **全部** 都为真值。

#### 添加版本

4.0.0

#### 参数

1.  `[predicates=[_.identity]]` _(...(Function|Function\[\]))_: 要调用的 predicates。

#### 返回

_(Function)_: 返回新的函数。

#### 例子

 ```js
var func = _.overEvery([Boolean, isFinite]);
 
func('1');
// => true
 
func(null);
// => false
 
func(NaN);
// => false

 ```