var assign = require('../release/assign.js');
var forEach = require('../release/forEach.js');

/**
 *  设置树结构节点的深度属性
 * @param {object} root - 树的根节点
 * @param {object} options - 配置参数对象，默认为 { childrenKey: 'children', depthKey: 'depth' , depth: 0 }
 * var tree = {
        children: [
            { children: [Array], id: '0-0', title: '节点0-0' },
            { children: [Array], id: '0-1', title: '节点0-1' }
        ],
        id: '0',
        title: '节点0'
    }
    calculateDepth(tree) // => {
        children: [
            { children: [Array], id: '0-0', title: '节点0-0', depth: 1 },
            { children: [Array], id: '0-1', title: '节点0-1', depth: 1 }
        ],
        id: '0',
        title: '节点0',
        depth: 0
    }
    calculateDepth(tree,{depth:10}) // => {"children":[{"children":[{"children":[],"id":"0-0-0","title":"节点0-0-0","depth":12},{"children":[],"id":"0-0-1","title":"节点0-0-1","depth":12},{"children":[],"id":"0-0-2","title":"节点0-0-2","depth":12},{"children":[],"id":"0-0-3","title":"节点0-0-3","depth":12}],"id":"0-0","title":"节点0-0","depth":11},{"children":[{"children":[],"id":"0-1-0","title":"节点0-1-0","depth":12},{"children":[],"id":"0-1-1","title":"节点0-1-1","depth":12}],"id":"0-1","title":"节点0-1","depth":11}],"id":"0","title":"节点0","depth":10}
 */
function setTreeNodeDepth(_root, _options) {
    _options = _options === void 0 ? {} : _options;
    var mergedOptions = assign(
        {},
        { childrenKey: 'children', depthKey: 'depth', depth: 0 },
        _options
    );
    if (!_root) {
        return;
    }
    _root[mergedOptions.depthKey] = mergedOptions.depth;
    mergedOptions.depth = mergedOptions.depth + 1;
    if (_root[mergedOptions.childrenKey]) {
        forEach(_root[mergedOptions.childrenKey], function (_child) {
            setTreeNodeDepth(_child, mergedOptions);
        });
    }
    return _root;
}
