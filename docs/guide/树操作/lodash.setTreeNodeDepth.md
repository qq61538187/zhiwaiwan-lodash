### `_.setTreeNodeDepth(tree,options)`

设置树结构中每个节点的深度

#### 引入版本

1.0.1

#### 参数

1.  `tree` _(Object)_: 需要处理的树结构对象
2.  `options` _(Object)_: 配置文件

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `childrenKey` | 子节点存放的键名 | _String_ | `children` |
| `depthKey` | 叶子深度属性名 | _String_ | `depth` |
| `depth` |  深度初始值 | _Number_ | `0` |


#### 返回

_(Object)_: 返回一个添加好叶子深度的树结构。

#### 例子

```js
_.setTreeNodeDepth({
        children: [
            { children: [Array], id: '0-0', title: '节点0-0' },
            { children: [Array], id: '0-1', title: '节点0-1' }
        ],
        id: '0',
        title: '节点0'
    });
    // => { children: [{ children: [Array], id: '0-0', title: '节点0-0', depth: 1 }, { children: [Array], id: '0-1', title: '节点0-1', depth: 1 }], id: '0',  title: '节点0',  depth: 0}
_.setTreeNodeDepth({
        children: [
            { children: [Array], id: '0-0', title: '节点0-0' },
            { children: [Array], id: '0-1', title: '节点0-1' }
        ],
        id: '0',
        title: '节点0'
    },{depth:10});
    // => {"children":[{"children":[{"children":[],"id":"0-0-0","title":"节点0-0-0","depth":12},{"children":[],"id":"0-0-1","title":"节点0-0-1","depth":12},{"children":[],"id":"0-0-2","title":"节点0-0-2","depth":12},{"children":[],"id":"0-0-3","title":"节点0-0-3","depth":12}],"id":"0-0","title":"节点0-0","depth":11},{"children":[{"children":[],"id":"0-1-0","title":"节点0-1-0","depth":12},{"children":[],"id":"0-1-1","title":"节点0-1-1","depth":12}],"id":"0-1","title":"节点0-1","depth":11}],"id":"0","title":"节点0","depth":10}

```