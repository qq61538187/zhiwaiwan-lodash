### `_.runInContext([context=root])`[​](#_runincontextcontextroot "_runincontextcontextroot的直接链接")

创建一个给定`context`上下文对象的原始的 `lodash` 函数。

#### 添加版本

1.1.0

#### 参数

1.  `[context=root]` _(Object)_: 上下文对象。

#### 返回

_(Function)_: 返回新的 `lodash` 对象

#### 例子

```js
_.mixin({ 'foo': _.constant('foo') });
 
var lodash = _.runInContext();
lodash.mixin({ 'bar': lodash.constant('bar') });
 
_.isFunction(_.foo);
// => true
_.isFunction(_.bar);
// => false
 
lodash.isFunction(lodash.foo);
// => false
lodash.isFunction(lodash.bar);
// => true
 
// 使用 `context` 模拟 `Date#getTime` 调用 `_.now`
var stubbed = _.runInContext({
  'Date': function() {
    return { 'getTime': stubGetTime };
  }
});
 
// 或者在 Node.js 中创建一个更高级的 `defer`
var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;

```