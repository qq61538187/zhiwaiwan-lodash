### `_.mixin([object=lodash], source, [options=])`[​](#_mixinobjectlodash-source-options "_mixinobjectlodash-source-options的直接链接")

添加来源对象自身的所有可枚举函数属性到目标对象。 如果 `object` 是个函数，那么函数方法将被添加到原型链上。  
  
**注意:** 使用[`_.runInContext`](#runInContext) 来创建原始的 `lodash` 函数来避免修改造成的冲突。

#### 添加版本

0.1.0

#### 参数

1.  `[object=lodash]` _(Function|Object)_: 目标对象。
2.  `source` _(Object)_: 来源对象。
3.  `[options=]` _(Object)_: 选项对象。
4.  `[options.chain=true]` _(boolean)_: 是否开启链式操作。

#### 返回

_(\*)_: 返回 `object`.

#### 例子

```js
function vowels(string) {
  return _.filter(string, function(v) {
    return /[aeiou]/i.test(v);
  });
}
 
_.mixin({ 'vowels': vowels });
_.vowels('fred');
// => ['e']
 
_('fred').vowels().value();
// => ['e']
 
_.mixin({ 'vowels': vowels }, { 'chain': false });
_('fred').vowels();
// => ['e']

```