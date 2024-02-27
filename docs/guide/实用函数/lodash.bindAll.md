### `_.bindAll(object, methodNames)`[​](#_bindallobject-methodnames "_bindallobject-methodnames的直接链接")

绑定一个对象的方法到对象本身，覆盖现有的方法。  
  
**注意:** 这个方法不会设置绑定函数的 "length" 属性。

#### 添加版本

0.1.0

#### 参数

1.  `object` _(Object)_: 用来绑定和分配绑定方法的对象。
2.  `methodNames` _(...(string|string\[\]))_: 对象绑定方法的名称。

#### 返回

_(Object)_: 返回 `object`.

#### 例子

```js
var view = {
  'label': 'docs',
  'click': function() {
    console.log('clicked ' + this.label);
  }
};
 
_.bindAll(view, ['click']);
jQuery(element).on('click', view.click);
// => Logs 'clicked docs' when clicked.

```