### `_.cond(pairs)`[​](#_condpairs "_condpairs的直接链接")

创建了一个函数，这个函数会迭代`pairs`，并调用最先返回真值对应的函数。该断言函数对绑定 `this` 及传入创建函数的参数。

#### 添加版本

4.0.0

#### 参数

1.  `pairs` _(Array)_: 断言函数对。

#### 返回

_(Function)_: 返回新的复合函数。

#### 例子

```js
var func = _.cond([
  [_.matches({ 'a': 1 }),           _.constant('matches A')],
  [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
  [_.stubTrue,                      _.constant('no match')]
]);
 
func({ 'a': 1, 'b': 2 });
// => 'matches A'
 
func({ 'a': 0, 'b': 1 });
// => 'matches B'
 
func({ 'a': '1', 'b': '2' });
// => 'no match'

```