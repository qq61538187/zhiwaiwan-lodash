var assign = require('../release/assign.js');
var forEach = require('../release/forEach.js');
/**
 * 获取树的最大深度
 * @param {Object} tree - 树对象
 * @param {Object} options - 配置项
 * @returns {number} - 最大深度
 */
function getTreeMaxDepth(tree, options) {
    var maxDepth = 0;
    options = options === void 0 ? {} : options;
    var mergedOptions = assign({}, { childrenKey: 'children' }, options);
    forEach(tree, function (item) {
        if (item[mergedOptions.childrenKey] && item[mergedOptions.childrenKey].length) {
            var childrenDepth = getTreeMaxDepth(item[mergedOptions.childrenKey], mergedOptions);
            if (childrenDepth > maxDepth) {
                maxDepth = childrenDepth;
            }
        } else {
            maxDepth++;
        }
    });
    return maxDepth;
}
