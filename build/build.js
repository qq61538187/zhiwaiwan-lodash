// const download = require('download-git-repo');
// const logs = require('./utils/log-utils');
const { exec } = require('child_process');
const path = require('path');
const fileUtils = require('./utils/file-utils');
const fs = require('fs');
const mapping = require('./mapping');
const lodash = require('lodash');
const lodashApi = {};
const pkg = require('../package.json');
const zhiaiwanPkg = require('../build/zhiaiwan-lodash-package.json');
var UglifyJS = require("uglify-js");


const requireRegex = /require\(\s*['"]([^'"]+)['"]\s*\)/;
function checkSrcApiHasLodashApi(lodashApi, srcFolderApi) {
  return srcFolderApi.some((api) => lodashApi[api]);
}
/**
 * 获取Lodash的API
 * @returns {object} lodashApi - Lodash的API对象
 */
function initLodashApi() {
  fileUtils.readFileSync(path.resolve(__dirname, '../release-es/lodash.js'), (line) => {
    let match = /\{[\s\S]+?\}/.exec(line);
    match &&
        (function () {
            let content = match[0];
            content = content
                .replace(/\{ default/g, '')
                .replace(/\ as/g, '')
                .replace(/\}/g, '')
                .replace(/(^\s*)|(\s*$)/g, '');
            if (content) {
                lodashApi[content] = true;
            }
        })();
  })
  fileUtils.copyFolderContents(path.resolve(__dirname, '../release'),path.resolve(__dirname, '../release'),{isCopy:false, getFile:(lodashApiFile)=>{
    if (lodashApiFile.endsWith('.js')) {
      // 如果是.js文件，则将其路径添加到jsFiles数组中
      lodashApi[path.basename(lodashApiFile, '.js')] = true;
    }
  }})
}


/**
 * 获取源文件夹的 API
 * @returns {array} 源文件夹的 API 列表
 */
function getSrcFolderApi() {
  let srcFolderApi = [];
  let srcDirPath = path.resolve(__dirname, '../src');
  fs.readdirSync(srcDirPath).forEach((file) => {
      const sourceFilePath = path.join(srcDirPath, file);
      // 判断是否为文件夹
      if (!fs.statSync(sourceFilePath).isDirectory()) {
          srcFolderApi.push(path.basename(file, '.js'));
      }
  });
  return srcFolderApi;
}




function initReleaseFolder(){
  return new Promise((resolve, reject) => {
  fileUtils.createFolderAndClear(path.resolve(__dirname, '../release'));
  fileUtils.createFolderAndClear(path.resolve(__dirname, '../release-es'));
  fileUtils.copyFolderContents(path.resolve(__dirname, '../node_modules/lodash-es'), path.resolve(__dirname, '../release-es'),{isRecursion:false,validate:(copyFile)=>{
    if(copyFile.endsWith('.js')){
      return true
    }
    return false
  }})
  fileUtils.copyFolderContents(path.resolve(__dirname, '../node_modules/lodash'), path.resolve(__dirname, '../release'),{isRecursion:false,validate:(copyFile)=>{
    if(copyFile.endsWith('.js') && !['core','core.min'].includes(path.basename(copyFile, '.js'))){
      return true
    }
    return false
  }})
  resolve()
})
}


/**
 * 创建分组js文件
 */
function createCategoryJsFolder() {
  // 添加分组js
  var outputPath = path.resolve(__dirname, `../release-es`);
  Object.keys(mapping.category).forEach((category) => {
      let categoryDefaultJsText = mapping.category[category]
          .map((fileName) => `import ${fileName} from './${fileName}.js';`)
          .join('\n');
      categoryDefaultJsText += `\nexport default {\n${mapping.category[category].join(' ,\n')}\n}\n`;
      fs.writeFileSync(
          `${outputPath}/${category.toLowerCase()}.default.js`,
          categoryDefaultJsText
      );
      let categoryJsText = mapping.category[category].map((fileName) => {
          return `export { default as ${fileName} } from './${fileName}.js';`;
      }).join('\n')
      categoryJsText += `\nexport { default } from './${category.toLowerCase()}.default.js';`;
      fs.writeFileSync(`${outputPath}/${category.toLowerCase()}.js`, categoryJsText);
  });
}

function rewriteLodashJsContentEs(srcFolderApi) {
  // 所有要插入lodash.js的src下的api
  let addExportFnStr = ``;
  let lodashJsContent = '';
  srcFolderApi.forEach((api) => {
      addExportFnStr += `export { default as ${api} } from './${api}.js';\n`;
  });
  //查抄内容要插入到哪行
  fileUtils.readFileSync(path.resolve(__dirname, '../release-es/lodash.js'), (line) => {
      if (line.indexOf(`export { default } from './lodash.default.js';`) !== -1) {
          lodashJsContent = `${lodashJsContent}${addExportFnStr}export { default } from './lodash.default.js';`;
      } else {
          lodashJsContent += `${line}\n`;
      }
  });
  fs.writeFileSync(path.resolve(__dirname, '../release-es/lodash.js'), lodashJsContent, 'utf-8');
}

function rewriteLodashDefaultJsEs(srcFolderApi) {
  let addPrototypeFnStr = ''
  let addExportFnStr = ''
  let mappingFunApi = []
  let lodashDefaultJsContent = ''
  let isFindImportStart = false;
  // 查找分组中所使用的自定义api
  Object.keys(mapping.category).forEach((category) => {
      addExportFnStr += `import ${category} from './${category}.js';\n`;
      mapping.category[category].forEach((api) => {
          mappingFunApi.push(api)
          addPrototypeFnStr += `lodash.prototype.${api} = ${category}.${api};\n`;
      })
  })
  // 排除srcFolderApi中mappingFunApi存在的api 要插入lodash.default.js的src下的api
  srcFolderApi = srcFolderApi.filter((api) => {
      return mappingFunApi.indexOf(api) === -1
  }).forEach(api=>{
      addExportFnStr += `import ${api} from './${api}.js';\n`;
      addPrototypeFnStr += `lodash.prototype.${api} = ${api};\n`;
  })
  //查抄内容要插入到哪行
  fileUtils.readFileSync(path.resolve(__dirname, '../release-es/lodash.default.js'), (line) => {
      if(/import\s+([A-Za-z_$][\w$]*)\s+from\s+(['"])(.*?\.js)\2/.test(line) && !isFindImportStart){
          isFindImportStart= true
          lodashDefaultJsContent += `${addExportFnStr}${line}\n`;
      } else {
          if(line.indexOf('export default lodash;') == -1){
              if(line.indexOf(`var VERSION = '${lodash.VERSION}';`) == -1){
                  lodashDefaultJsContent += `${line}\n`;
              } else {
                  lodashDefaultJsContent += `var VERSION = '${pkg.version}';\n`;
                  console.log('替换版本成功')
              }
          } else {
              lodashDefaultJsContent += `${addPrototypeFnStr}\n${line}`;
          }
      }
  });
  fs.writeFileSync(path.resolve(__dirname, '../release-es/lodash.default.js'), lodashDefaultJsContent, 'utf-8');
}

function rewriteLodashJsContentCommonJs(){
  var  srcFnContent = '';
  var  srcFnPrototypeContent = '';
  var count = 0
  var lodashContent = '';
  fileUtils.copyFolderContents(path.resolve(__dirname, '../src'),path.resolve(__dirname, '../src'),{isCopy:false, getFile:(lodashApiFile)=>{
    if (lodashApiFile.endsWith('.js')) {
      srcFnPrototypeContent += `lodash.prototype.${path.basename(lodashApiFile, '.js')} = ${path.basename(lodashApiFile, '.js')}\n`
      fileUtils.readFileSync(lodashApiFile,(line)=>{
        var match =  line.match(requireRegex);
        if(!match){
          srcFnContent += line + '\n'
        }
      })
      srcFnContent += `\n\n`
    }
  }})

  // 添加 src中的方法 和 在lodash原型链中添加src中的方法名
  fileUtils.readFileSync(path.resolve(__dirname, '../release/lodash.js'), (line) => {
    count++
    if(count == mapping.lodashJs.insertLine){
      // apiFN 插入的位置
      line = srcFnContent
    } else if(line.indexOf(`return lodash;`)!= -1) {
      // 要插入的prototype方法名
      line = `\n${srcFnPrototypeContent}\n${line}`
    }
    lodashContent += line + '\n'
  })
  var code = lodashContent;
  var options = { warnings: true };
  var result = UglifyJS.minify(code, {
    'fromString': true,
    'compress': {
      'collapse_vars': true,
      'negate_iife': false,
      'pure_getters': true,
      'unsafe': true,
      'warnings': false
    },
    'output':{
      'ascii_only': false,
      'max_line_len': 500
    }
  });
  if(result.error){
    console.log(result.error)
    console.log('压缩失败')
  } else {
    fs.writeFileSync(path.resolve(__dirname, `../release/lodash.min.js`), result.code, 'utf-8')
  }
  fs.writeFileSync(path.resolve(__dirname, `../release/lodash.js`), lodashContent, 'utf-8')
}



function rewriteSrcFolderApiEs() {
  fileUtils.copyFolderContents(path.resolve(__dirname, '../src'),path.resolve(__dirname, '../release'),{isCopy:false, getFile:(lodashApiFile)=>{
    if (lodashApiFile.endsWith('.js')) {
      // 如果是.js文件，则将其路径添加到jsFiles数组中
      let newJsContent = ''
      fileUtils.readFileSync(lodashApiFile, (line)=>{
        var match =  line.match(requireRegex);
        if(match){
          let requireFile = match[1].split('/')[match[1].split('/').length-1]
          newJsContent += `import ${requireFile.split('.')[0]} from './${requireFile}';\n`
        } else {
          newJsContent += line + '\n'
        }
      })
      newJsContent += `export default ${path.basename(lodashApiFile, '.js')};`
      fs.writeFileSync(path.resolve(__dirname, `../release-es/${path.basename(lodashApiFile, '.js')}.js`), newJsContent, 'utf-8')
    }
  }})
}


function checkLodashJsIsChange(){
  // 检查lodash.js是否有变化
  let lodashJsContent = ''
  var count = 0
  var newInsertContent = '';
  fileUtils.readFileSync(path.resolve(__dirname, '../release/lodash.js'), (line) => {
    count++
    // 替换当前版本
    if(line.indexOf(`var VERSION = '${lodash.VERSION}';`) != -1){
        line = `var VERSION = '${pkg.version}';\n`
    }
    if(count>=mapping.lodashJs.compareLineStart && count<=mapping.lodashJs.compareLineEnd){
      lodashJsContent += `${line}\n`;
    }
    newInsertContent += `${line}\n`;
  });

  // 去除lodashJsContent 所有空格
  lodashJsContent = lodashJsContent.replace(/\s/g, '');
  var compareText = mapping.lodashJs.compareText.replace(/\s/g, '');
  if(compareText == lodashJsContent){
    fs.writeFileSync(path.resolve(__dirname, `../release/lodash.js`), newInsertContent, 'utf-8')
    return false
  } else {
    return true
  }
}



function build(){
  initReleaseFolder().then(()=>{
    let isChange = checkLodashJsIsChange();
    if(isChange){
      console.log('检测到Npm模式的文件发生变化，请人工修改Mapping重点对比信息，作为修改对比插入位置');
      return
    }
    initLodashApi()
    let srcFolderApi = getSrcFolderApi();
    let isHasLodashApi = checkSrcApiHasLodashApi(lodashApi, srcFolderApi);
    if (isHasLodashApi) {
        console.log('当前自定义方法名称与lodash冲突，请进行修改');
        return;
    }

    //开始处理es模式
    createCategoryJsFolder(); // 处理分组js
    rewriteSrcFolderApiEs(); // 处理src函数内容转为es模式
    rewriteLodashJsContentEs(srcFolderApi); // 处理lodash.js 内容
    rewriteLodashDefaultJsEs(srcFolderApi); // 处理lodash.default.js 内容

    // 开始处理commonjs模式
    rewriteLodashJsContentCommonJs();
    zhiaiwanPkg.version = pkg.version
    zhiaiwanPkg.name = 'zhiaiwan-lodash'
    fs.writeFileSync(path.resolve(__dirname, '../release/package.json'), JSON.stringify(zhiaiwanPkg, null, 2), 'utf-8')
    zhiaiwanPkg.name = 'zhiaiwan-lodash-es'
    delete zhiaiwanPkg.main
    zhiaiwanPkg['type'] = 'module'
    zhiaiwanPkg['jsnext:main'] = 'lodash.js'
    zhiaiwanPkg['main'] = 'lodash.js'
    zhiaiwanPkg['module'] = 'lodash.js'
    zhiaiwanPkg['sideEffects'] = false
    fs.writeFileSync(path.resolve(__dirname, '../release-es/package.json'), JSON.stringify(zhiaiwanPkg, null, 2), 'utf-8')
    fs.writeFileSync(path.resolve(__dirname, '../release-es/.npmignore'), `.npmignore \n.npmrc\npackage.json\n`);
    fs.writeFileSync(path.resolve(__dirname, '../release-es/.npmrc'), `registry=https://registry.npmjs.org/`);
    console.log('build完成-请进行发布');
  })
}


function preLint(){
  console.log('正在进行格式化');
  exec('npm run lint', (error) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log('格式化完毕')
    build()
  });
}

preLint()

