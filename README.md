#  [zhiaiwan-lodash](https://github.com/qq61538187/zhiwaiwan-lodash)


>因为lodash更新迭代较慢，不太满足在项目中，使用及收集常用工具方法，特此只爱玩lodash基于lodash二次拓展代码库，增加常用工具方法，定义更新同步lodash



```sh 
npm install 
##

npm run build

## 进入 release or release-es 发布到npm

npm publish

## 取消发布 24小时之内的

npm unpublish 包名 --force

## 取消发布指定版不能

pm unpublish 包名@1.12.3
```

## 使用方法

-> 和lodash使用方法无异，只是增加了一些常用工具方法 

```sh
// node模式 使用方法和lodash无区别，值保留了full build的内容 去除了 fp 和 core文件
// Load the full build.
var _ = require('zhiaiwan-lodash');
// Load method categories.
var array = require('zhiaiwan-lodash/array');


```

## [欢迎提意见和建议 issues](https://github.com/qq61538187/zhiwaiwan-lodash/issues)

## Module Formats
 * [lodash](https://www.npmjs.com/package/lodash)
 * [lodash-es](https://www.npmjs.com/package/lodash-es)
