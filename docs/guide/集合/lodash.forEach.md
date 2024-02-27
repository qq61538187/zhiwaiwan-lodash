### `_.forEach(collection, [iteratee=_.identity])`[​](#_foreachcollection-iteratee_identity "_foreachcollection-iteratee_identity的直接链接")

调用 `iteratee` 遍历 `collection`(集合) 中的每个元素， iteratee 调用3个参数： _(value, index|key, collection)_。 如果迭代函数（iteratee）显式的返回 `false` ，迭代会提前退出。  
  
**注意:** 与其他"集合"方法一样，类似于数组，对象的 "length" 属性也会被遍历。想避免这种情况，可以用[`_.forIn`](#forIn) 或者[`_.forOwn`](#forOwn) 代替。

#### 添加版本

0.1.0

#### 别名

_\_.each_

#### 参数

1.  `collection` _(Array|Object)_: 一个用来迭代的集合。
2.  `[iteratee=_.identity]` _(Function)_: 每次迭代调用的函数。

#### 返回

_(\*)_: 返回集合 `collection`。

#### 例子

  ```js
    _([1, 2]).forEach(function(value) {
    console.log(value);
    });
    // => Logs `1` then `2`.
    
    _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
    console.log(key);
    });
    // => Logs 'a' then 'b' (iteration order is not guaranteed).
  ```