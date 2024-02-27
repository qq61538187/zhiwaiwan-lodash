### `_.toPath(value)`[​](#_topathvalue "_topathvalue的直接链接")

转化 `value` 为属性路径的数组 。

#### 添加版本

4.0.0

#### 参数

1.  `value` _(\*)_: 要转换的值

#### 返回

_(Array)_: 返回包含属性路径的数组。

#### 例子

```js
_.toPath('a.b.c');
// => ['a', 'b', 'c']
 
_.toPath('a[0].b.c');
// => ['a', '0', 'b', 'c']

```