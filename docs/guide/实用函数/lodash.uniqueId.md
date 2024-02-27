### `_.uniqueId([prefix=''])`[​](#_uniqueidprefix "_uniqueidprefix的直接链接")

生成唯一ID。 如果提供了 `prefix` ，会被添加到ID前缀上。

#### 添加版本

0.1.0

#### 参数

1.  `[prefix='']` _(string)_: 要添加到ID前缀的值。

#### 返回

_(string)_: 返回唯一ID。

#### 例子

```js
_.uniqueId('contact_');
// => 'contact_104'
 
_.uniqueId();
// => '105'

```