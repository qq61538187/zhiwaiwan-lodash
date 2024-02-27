### `_.template([string=''], [options=])`[​](#_templatestring-options "_templatestring-options的直接链接")

创建一个预编译模板方法，可以插入数据到模板中 "interpolate" 分隔符相应的位置。 HTML会在 "escape" 分隔符中转换为相应实体。 在 "evaluate" 分隔符中允许执行JavaScript代码。 在模板中可以自由访问变量。 如果设置了选项对象，则会优先覆盖[`_.templateSettings`](#templateSettings) 的值。  
  
**注意:** 在开发过程中，构建[`_.template`](#template)可以使用[sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)， 便于调试。  
  
了解更多预编译模板的信息查看[lodash的自定义构建文档](https://lodash.com/custom-builds)。  
  
了解更多 Chrome 沙箱扩展的信息查看[Chrome的扩展文档](https://developer.chrome.com/extensions/sandboxingEval)。

#### 添加版本

0.1.0

#### 参数

1.  `[string='']` _(string)_: 模板字符串.
2.  `[options=]` _(Object)_: 选项对象.
3.  `[options.escape=_.templateSettings.escape]` _(RegExp)_: "escape" 分隔符.
4.  `[options.evaluate=_.templateSettings.evaluate]` _(RegExp)_: "evaluate" 分隔符.
5.  `[options.imports=_.templateSettings.imports]` _(Object)_: 导入对象到模板中作为自由变量。
6.  `[options.interpolate=_.templateSettings.interpolate]` _(RegExp)_: "interpolate" 分隔符。
7.  `[options.sourceURL='lodash.templateSources[n]']` _(string)_: 模板编译的来源URL。
8.  `[options.variable='obj']` _(string)_: 数据对象的变量名。

#### 返回

_(Function)_: 返回编译模板函数。

#### 例子

 ```js
 // 使用 "interpolate" 分隔符创建编译模板
var compiled = _.template('hello <%= user %>!');
compiled({ 'user': 'fred' });
// => 'hello fred!'
 
// 使用 HTML "escape" 转义数据的值
var compiled = _.template('<b><%- value %></b>');
compiled({ 'value': '<script>' });
// => '<b><script></b>'
 
// 使用 "evaluate" 分隔符执行 JavaScript 和 生成HTML代码
var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'
 
// 在 "evaluate" 分隔符中使用内部的 `print` 函数
var compiled = _.template('<% print("hello " + user); %>!');
compiled({ 'user': 'barney' });
// => 'hello barney!'
 
// 使用 ES 分隔符代替默认的 "interpolate" 分隔符
var compiled = _.template('hello ${ user }!');
compiled({ 'user': 'pebbles' });
// => 'hello pebbles!'
 
// 使用自定义的模板分隔符
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
var compiled = _.template('hello {{ user }}!');
compiled({ 'user': 'mustache' });
// => 'hello mustache!'
 
// 使用反斜杠符号作为纯文本处理
var compiled = _.template('<%= "\\<%- value %\\>" %>');
compiled({ 'value': 'ignored' });
// => '<%- value %>'
 
// 使用 `imports` 选项导入 `jq` 作为 `jQuery` 的别名
var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'
 
// 使用 `sourceURL` 选项指定模板的来源URL
var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
compiled(data);
// => 在开发工具的 Sources 选项卡 或 Resources 面板中找到 "greeting.jst"
 
// 使用 `variable` 选项确保在编译模板中不声明变量
var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
compiled.source;
// => function(data) {
//   var __t, __p = '';
//   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
//   return __p;
// }
 
// 使用 `source` 特性内联编译模板
// 便以查看行号、错误信息、堆栈
fs.writeFileSync(path.join(cwd, 'jst.js'), '\
  var JST = {\
    "main": ' + _.template(mainText).source + '\
  };\
');

 ```