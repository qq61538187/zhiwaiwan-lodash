### `_.clone(value)`[​](#_clonevalue "_clonevalue的直接链接")

创建一个 `value` 的浅拷贝。  
  
**注意**: 这个方法参考自[structured clone algorithm](https://mdn.io/Structured_clone_algorithm) 以及支持 arrays、array buffers、 booleans、 date objects、maps、 numbers， `Object` 对象, regexes, sets, strings, symbols, 以及 typed arrays。 `arguments`对象的可枚举属性会拷贝为普通对象。 一些不可拷贝的对象，例如error objects、functions, DOM nodes, 以及 WeakMaps 会返回空对象。

#### 添加版本

0.1.0

#### 参数

1.  `value` _(\*)_: 要拷贝的值

#### 返回

_(\*)_: 返回拷贝后的值。

#### 例子

```js
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var shallow = _.clone(objects);
console.log(shallow[0] === objects[0]);
// => true

```