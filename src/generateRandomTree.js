var assign = require('../release/assign.js');
function generateRandomTree(options) {
    options = options === void 0 ? {} : options;
    // 默认选项
    var defaultOptions = {
        childrenKey: 'children', // 子节点存放的键名
        maxDepth: 3, // 树的最大深度
        minChildren: 2, // 每个节点最少子节点数
        maxChildren: 5, // 每个节点最多子节点数
        totalNodes: 10, // 总共生成的节点数
        startIndex: 0 // 节点下标的起始值
    };

    // 合并选项
    var mergedOptions = assign({}, defaultOptions, options);

    var generatedNodes = 0; // 已生成的节点数

    // 生成随机节点
    function generateNode(depth, currentIndex, parentId) {
        // 达到最大深度或总节点数时，停止生成节点
        if (depth >= mergedOptions.maxDepth || generatedNodes >= mergedOptions.totalNodes) {
            return null;
        }

        // 随机确定当前节点的子节点数，限制在[minChildren, maxChildren]之间
        const numChildren = Math.min(
            Math.floor(
                Math.random() * (mergedOptions.maxChildren - mergedOptions.minChildren + 1) +
                    mergedOptions.minChildren
            ),
            mergedOptions.totalNodes - generatedNodes
        );

        // 构建当前节点的路径，用于 indexPath
        var currentNodePath = parentId
            ? parentId + '-' + (currentIndex + mergedOptions.startIndex)
            : '' + (currentIndex + mergedOptions.startIndex);
        // 当前节点对象
        var node = {
            id: currentNodePath, // 当前节点在树中的路径
            title: '节点' + currentNodePath
        };
        node[mergedOptions.childrenKey] = [];

        // 递归生成子节点
        for (var i = 0; i < numChildren; i++) {
            var childNode = generateNode(depth + 1, i, currentNodePath);
            if (childNode) {
                node[mergedOptions.childrenKey].push(childNode); // 添加子节点
                generatedNodes++; // 已生成节点数增加
            }
        }

        return node;
    }

    // 生成根节点
    return generateNode(0, 0, null);
}
