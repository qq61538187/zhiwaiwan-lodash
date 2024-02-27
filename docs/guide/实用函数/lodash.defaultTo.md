### `_.defaultTo(value, defaultValue)`[​](#_defaulttovalue-defaultvalue "_defaulttovalue-defaultvalue的直接链接")

检查`value`，以确定一个默认值是否应被返回。如果`value`为`NaN`, `null`, 或者 `undefined`，那么返回`defaultValue`默认值。

#### 添加版本

4.14.0

#### 参数

1.  `value` _(\*)_: 要检查的值。
2.  `defaultValue` _(\*)_: 默认值。

#### 返回

_(\*)_: 返回 resolved 值。

#### 例子

```js
_.defaultTo(1, 10);
// => 1
 
_.defaultTo(undefined, 10);
// => 10

```