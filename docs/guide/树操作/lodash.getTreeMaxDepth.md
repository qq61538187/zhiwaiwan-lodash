### `_.getTreeMaxDepth(tree, options)`

获取`tree`结构中的最大深度。

#### 引入版本

1.0.1

#### 参数

1.  `tree` _(Object)_: 树结构
2.  `options` _(Object)_: 配置文件

#### 返回

Number: 最大深度

#### 例子

```js
_.getTreeMaxDepth({
    "id": "0",
    "title": "节点0",
    "children": [{
      "id": "0-0",
      "title": "节点0-0",
      "children": [{
        "id": "0-0-0",
        "title": "节点0-0-0",
        "children": []
      }, {
        "id": "0-0-1",
        "title": "节点0-0-1",
        "children": []
      }, {
        "id": "0-0-2",
        "title": "节点0-0-2",
        "children": []
      }]
    }, {
      "id": "0-1",
      "title": "节点0-1",
      "children": [{
        "id": "0-1-0",
        "title": "节点0-1-0",
        "children": []
      }, {
        "id": "0-1-1",
        "title": "节点0-1-1",
        "children": []
      }]
    }, {
      "id": "0-2",
      "title": "节点0-2",
      "children": [{
        "id": "0-2-0",
        "title": "节点0-2-0",
        "children": []
      }, {
        "id": "0-2-1",
        "title": "节点0-2-1",
        "children": []
      }, {
        "id": "0-2-2",
        "title": "节点0-2-2",
        "children": []
      }]
    }]
  })
// => 3

_.getTreeMaxDepth([{
    "id": "0",
    "title": "节点0",
    "ch": [{
      "id": "0-0",
      "title": "节点0-0",
    }, {
      "id": "0-1",
      "title": "节点0-1",
    }]
  }],{ childrenKey: 'ch' })
// => 2

```