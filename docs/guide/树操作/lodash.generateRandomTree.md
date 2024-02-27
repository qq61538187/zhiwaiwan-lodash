### `_.generateRandomTree(options)`

通过配置生成一个随机树。

#### 引入版本

1.0.1

#### 参数

1.  `options` _(Object)_: 随机树结构配置。

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `childrenKey` | 子节点存放的键名 | _String_ | `children` |
| `maxDepth` | 树的最大深度 | _Number_ | `3` |
| `minChildren` | 每个节点最少子节点数 | _Number_ | `2` |
| `maxChildren` | 每个节点最多子节点数 | _Number_ | `5` |
| `totalNodes` | 总共生成的节点数 | _Number_ | `10` |
| `startIndex` | 节点下标的起始值 | _Number_ | `0` |


#### 返回

_(Array)_: 返回一个树结构数组（注：相当于一个二维数组）。

#### 例子

```js
_.generateRandomTree();
// => {"id":"0","title":"节点0","children":[{"id":"0-0","title":"节点0-0","children":[{"id":"0-0-0","title":"节点0-0-0","children":[]},{"id":"0-0-1","title":"节点0-0-1","children":[]},{"id":"0-0-2","title":"节点0-0-2","children":[]},{"id":"0-0-3","title":"节点0-0-3","children":[]},{"id":"0-0-4","title":"节点0-0-4","children":[]}]},{"id":"0-1","title":"节点0-1","children":[{"id":"0-1-0","title":"节点0-1-0","children":[]},{"id":"0-1-1","title":"节点0-1-1","children":[]},{"id":"0-1-2","title":"节点0-1-2","children":[]},{"id":"0-1-3","title":"节点0-1-3","children":[]}]}]}
 
_.generateRandomTree({maxDepth:3,maxChildren:3});
// => {"id":"0","title":"节点0","children":[{"id":"0-0","title":"节点0-0","children":[{"id":"0-0-0","title":"节点0-0-0","children":[]},{"id":"0-0-1","title":"节点0-0-1","children":[]},{"id":"0-0-2","title":"节点0-0-2","children":[]}]},{"id":"0-1","title":"节点0-1","children":[{"id":"0-1-0","title":"节点0-1-0","children":[]},{"id":"0-1-1","title":"节点0-1-1","children":[]}]},{"id":"0-2","title":"节点0-2","children":[{"id":"0-2-0","title":"节点0-2-0","children":[]},{"id":"0-2-1","title":"节点0-2-1","children":[]},{"id":"0-2-2","title":"节点0-2-2","children":[]}]}]}

```