### `_.bindKey(object, key, [partials])`[​](#_bindkeyobject-key-partials "_bindkeyobject-key-partials的直接链接")

创建一个函数,在`object[key]`上通过接收`partials`附加参数，调用这个方法。  
  
这个方法与[`_.bind`](#bind) 的不同之处在于允许重新定义绑定函数即使它还不存在。 浏览[Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern) 了解更多详情。  
  
`_.bind.placeholder`值，默认是以 `_` 作为附加部分参数的占位符。

#### 添加版本

0.10.0

#### 参数

1.  `object` _(Object)_: 需要绑定函数的对象。
2.  `key` _(string)_: 需要绑定函数对象的键。
3.  `[partials]` _(...\*)_: 附加的部分参数。

#### 返回

_(Function)_: 返回新的绑定函数。

#### 例子

```js

var object = {
  'user': 'fred',
  'greet': function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};
 
var bound = _.bindKey(object, 'greet', 'hi');
bound('!');
// => 'hi fred!'
 
object.greet = function(greeting, punctuation) {
  return greeting + 'ya ' + this.user + punctuation;
};
 
bound('!');
// => 'hiya fred!'
 
// Bound with placeholders.
var bound = _.bindKey(object, 'greet', _, '!');
bound('hi');
// => 'hiya fred!'

```