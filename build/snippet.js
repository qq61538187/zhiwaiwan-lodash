
import fs from 'fs'
import path from 'path'


/**
 * 获取初始化lodash中文文档api配置json
 * 1.https://www.lodashjs.com/
 * 2. 在控制台中执行 initLodashApi
 */
// function initLodashApi() {
//     function mockClick(_index) {
//         return new Promise((resolve, reject) => {
//             document
//                 .querySelectorAll('.theme-doc-sidebar-menu.menu__list>li')
//                 [_index].querySelector('a')
//                 .click();
//             setTimeout(() => {
//                 let text = document
//                     .querySelectorAll('.theme-doc-sidebar-menu.menu__list>li')
//                     [_index].querySelector('a').innerText;
//                 let options = {
//                     text: text,
//                     link: '',
//                     collapsible: true,
//                     collapsed: true,
//                     items: []
//                 };
//                 document
//                     .querySelectorAll('.theme-doc-sidebar-menu.menu__list>li')
//                     [_index].querySelectorAll('.menu__list li')
//                     ?.forEach((item) => {
//                         options.items.push({
//                             text: item.innerText.replace(/_./, 'lodash.'),
//                             link: `/guide/${text}/${item.innerText.replace(/_./, 'lodash.')}`
//                         });
//                     });
//                 resolve(options);
//             }, 1000);
//         });
//     }

//     var count = 0;
//     var list = document.querySelectorAll('.theme-doc-sidebar-menu.menu__list>li');
//     var optionsList = [];

//     function start() {
//         if (count < list.length) {
//             mockClick(count).then((options) => {
//                 optionsList.push(options);
//                 count++;
//                 start();
//             });
//         } else {
//             console.log(JSON.stringify(optionsList));
//         }
//     }

//     start();
// }
// initLodashApi();


var list = [
  {
      text: '数组',
      link: '',
      collapsible: true,
      collapsed: true,
      items: [
          { text: 'lodash.chunk', link: '/guide/数组/lodash.chunk' },
          { text: 'lodash.compact', link: '/guide/数组/lodash.compact' },
          { text: 'lodash.concat', link: '/guide/数组/lodash.concat' },
          { text: 'lodash.difference', link: '/guide/数组/lodash.difference' },
          { text: 'lodash.differenceBy', link: '/guide/数组/lodash.differenceBy' },
          { text: 'lodash.differenceWith', link: '/guide/数组/lodash.differenceWith' },
          { text: 'lodash.drop', link: '/guide/数组/lodash.drop' },
          { text: 'lodash.dropRight', link: '/guide/数组/lodash.dropRight' },
          { text: 'lodash.dropRightWhile', link: '/guide/数组/lodash.dropRightWhile' },
          { text: 'lodash.dropWhile', link: '/guide/数组/lodash.dropWhile' },
          { text: 'lodash.fill', link: '/guide/数组/lodash.fill' },
          { text: 'lodash.findIndex', link: '/guide/数组/lodash.findIndex' },
          { text: 'lodash.findLastIndex', link: '/guide/数组/lodash.findLastIndex' },
          { text: 'lodash.first -> head', link: '/guide/数组/lodash.first -> head' },
          { text: 'lodash.flatten', link: '/guide/数组/lodash.flatten' },
          { text: 'lodash.flattenDeep', link: '/guide/数组/lodash.flattenDeep' },
          { text: 'lodash.flattenDepth', link: '/guide/数组/lodash.flattenDepth' },
          { text: 'lodash.fromPairs', link: '/guide/数组/lodash.fromPairs' },
          { text: 'lodash.head', link: '/guide/数组/lodash.head' },
          { text: 'lodash.indexOf', link: '/guide/数组/lodash.indexOf' },
          { text: 'lodash.initial', link: '/guide/数组/lodash.initial' },
          { text: 'lodash.intersection', link: '/guide/数组/lodash.intersection' },
          { text: 'lodash.intersectionBy', link: '/guide/数组/lodash.intersectionBy' },
          { text: 'lodash.intersectionWith', link: '/guide/数组/lodash.intersectionWith' },
          { text: 'lodash.join', link: '/guide/数组/lodash.join' },
          { text: 'lodash.last', link: '/guide/数组/lodash.last' },
          { text: 'lodash.lastIndexOf', link: '/guide/数组/lodash.lastIndexOf' },
          { text: 'lodash.nth', link: '/guide/数组/lodash.nth' },
          { text: 'lodash.pull', link: '/guide/数组/lodash.pull' },
          { text: 'lodash.pullAll', link: '/guide/数组/lodash.pullAll' },
          { text: 'lodash.pullAllBy', link: '/guide/数组/lodash.pullAllBy' },
          { text: 'lodash.pullAllWith', link: '/guide/数组/lodash.pullAllWith' },
          { text: 'lodash.pullAt', link: '/guide/数组/lodash.pullAt' },
          { text: 'lodash.remove', link: '/guide/数组/lodash.remove' },
          { text: 'lodash.reverse', link: '/guide/数组/lodash.reverse' },
          { text: 'lodash.slice', link: '/guide/数组/lodash.slice' },
          { text: 'lodash.sortedIndex', link: '/guide/数组/lodash.sortedIndex' },
          { text: 'lodash.sortedIndexBy', link: '/guide/数组/lodash.sortedIndexBy' },
          { text: 'lodash.sortedIndexOf', link: '/guide/数组/lodash.sortedIndexOf' },
          { text: 'lodash.sortedLastIndex', link: '/guide/数组/lodash.sortedLastIndex' },
          { text: 'lodash.sortedLastIndexBy', link: '/guide/数组/lodash.sortedLastIndexBy' },
          { text: 'lodash.sortedLastIndexOf', link: '/guide/数组/lodash.sortedLastIndexOf' },
          { text: 'lodash.sortedUniq', link: '/guide/数组/lodash.sortedUniq' },
          { text: 'lodash.sortedUniqBy', link: '/guide/数组/lodash.sortedUniqBy' },
          { text: 'lodash.tail', link: '/guide/数组/lodash.tail' },
          { text: 'lodash.take', link: '/guide/数组/lodash.take' },
          { text: 'lodash.takeRight', link: '/guide/数组/lodash.takeRight' },
          { text: 'lodash.takeRightWhile', link: '/guide/数组/lodash.takeRightWhile' },
          { text: 'lodash.takeWhile', link: '/guide/数组/lodash.takeWhile' },
          { text: 'lodash.union', link: '/guide/数组/lodash.union' },
          { text: 'lodash.unionBy', link: '/guide/数组/lodash.unionBy' },
          { text: 'lodash.unionWith', link: '/guide/数组/lodash.unionWith' },
          { text: 'lodash.uniq', link: '/guide/数组/lodash.uniq' },
          { text: 'lodash.uniqBy', link: '/guide/数组/lodash.uniqBy' },
          { text: 'lodash.uniqWith', link: '/guide/数组/lodash.uniqWith' },
          { text: 'lodash.unzip', link: '/guide/数组/lodash.unzip' },
          { text: 'lodash.unzipWith', link: '/guide/数组/lodash.unzipWith' },
          { text: 'lodash.without', link: '/guide/数组/lodash.without' },
          { text: 'lodash.xor', link: '/guide/数组/lodash.xor' },
          { text: 'lodash.xorBy', link: '/guide/数组/lodash.xorBy' },
          { text: 'lodash.xorWith', link: '/guide/数组/lodash.xorWith' },
          { text: 'lodash.zip', link: '/guide/数组/lodash.zip' },
          { text: 'lodash.zipObject', link: '/guide/数组/lodash.zipObject' },
          { text: 'lodash.zipObjectDeep', link: '/guide/数组/lodash.zipObjectDeep' },
          { text: 'lodash.zipWith', link: '/guide/数组/lodash.zipWith' }
      ]
  },
  {
      text: '集合',
      link: '',
      collapsible: true,
      collapsed: true,
      items: [
          { text: 'lodash.countBy', link: '/guide/集合/lodash.countBy' },
          { text: 'lodash.each -> forEach', link: '/guide/集合/lodash.each -> forEach' },
          {
              text: 'lodash.eachRight -> forEachRight',
              link: '/guide/集合/lodash.eachRight -> forEachRight'
          },
          { text: 'lodash.every', link: '/guide/集合/lodash.every' },
          { text: 'lodash.filter', link: '/guide/集合/lodash.filter' },
          { text: 'lodash.find', link: '/guide/集合/lodash.find' },
          { text: 'lodash.findLast', link: '/guide/集合/lodash.findLast' },
          { text: 'lodash.flatMap', link: '/guide/集合/lodash.flatMap' },
          { text: 'lodash.flatMapDeep', link: '/guide/集合/lodash.flatMapDeep' },
          { text: 'lodash.flatMapDepth', link: '/guide/集合/lodash.flatMapDepth' },
          { text: 'lodash.forEach', link: '/guide/集合/lodash.forEach' },
          { text: 'lodash.forEachRight', link: '/guide/集合/lodash.forEachRight' },
          { text: 'lodash.groupBy', link: '/guide/集合/lodash.groupBy' },
          { text: 'lodash.includes', link: '/guide/集合/lodash.includes' },
          { text: 'lodash.invokeMap', link: '/guide/集合/lodash.invokeMap' },
          { text: 'lodash.keyBy', link: '/guide/集合/lodash.keyBy' },
          { text: 'lodash.map', link: '/guide/集合/lodash.map' },
          { text: 'lodash.orderBy', link: '/guide/集合/lodash.orderBy' },
          { text: 'lodash.partition', link: '/guide/集合/lodash.partition' },
          { text: 'lodash.reduce', link: '/guide/集合/lodash.reduce' },
          { text: 'lodash.reduceRight', link: '/guide/集合/lodash.reduceRight' },
          { text: 'lodash.reject', link: '/guide/集合/lodash.reject' },
          { text: 'lodash.sample', link: '/guide/集合/lodash.sample' },
          { text: 'lodash.sampleSize', link: '/guide/集合/lodash.sampleSize' },
          { text: 'lodash.shuffle', link: '/guide/集合/lodash.shuffle' },
          { text: 'lodash.size', link: '/guide/集合/lodash.size' },
          { text: 'lodash.some', link: '/guide/集合/lodash.some' },
          { text: 'lodash.sortBy', link: '/guide/集合/lodash.sortBy' }
      ]
  },
  {
      text: '函数',
      link: '',
      collapsible: true,
      collapsed: true,
      items: [
          { text: 'lodash.after', link: '/guide/函数/lodash.after' },
          { text: 'lodash.ary', link: '/guide/函数/lodash.ary' },
          { text: 'lodash.before', link: '/guide/函数/lodash.before' },
          { text: 'lodash.bind', link: '/guide/函数/lodash.bind' },
          { text: 'lodash.bindKey', link: '/guide/函数/lodash.bindKey' },
          { text: 'lodash.curry', link: '/guide/函数/lodash.curry' },
          { text: 'lodash.curryRight', link: '/guide/函数/lodash.curryRight' },
          { text: 'lodash.debounce', link: '/guide/函数/lodash.debounce' },
          { text: 'lodash.defer', link: '/guide/函数/lodash.defer' },
          { text: 'lodash.delay', link: '/guide/函数/lodash.delay' },
          { text: 'lodash.flip', link: '/guide/函数/lodash.flip' },
          { text: 'lodash.memoize', link: '/guide/函数/lodash.memoize' },
          { text: 'lodash.negate', link: '/guide/函数/lodash.negate' },
          { text: 'lodash.once', link: '/guide/函数/lodash.once' },
          { text: 'lodash.overArgs', link: '/guide/函数/lodash.overArgs' },
          { text: 'lodash.partial', link: '/guide/函数/lodash.partial' },
          { text: 'lodash.partialRight', link: '/guide/函数/lodash.partialRight' },
          { text: 'lodash.rearg', link: '/guide/函数/lodash.rearg' },
          { text: 'lodash.rest', link: '/guide/函数/lodash.rest' },
          { text: 'lodash.spread', link: '/guide/函数/lodash.spread' },
          { text: 'lodash.throttle', link: '/guide/函数/lodash.throttle' },
          { text: 'lodash.unary', link: '/guide/函数/lodash.unary' },
          { text: 'lodash.wrap', link: '/guide/函数/lodash.wrap' }
      ]
  },
  {
      text: '语言',
      link: '',
      collapsible: true,
      collapsed: true,
      items: [
          { text: 'lodash.castArray', link: '/guide/语言/lodash.castArray' },
          { text: 'lodash.clone', link: '/guide/语言/lodash.clone' },
          { text: 'lodash.cloneDeep', link: '/guide/语言/lodash.cloneDeep' },
          { text: 'lodash.cloneDeepWith', link: '/guide/语言/lodash.cloneDeepWith' },
          { text: 'lodash.cloneWith', link: '/guide/语言/lodash.cloneWith' },
          { text: 'lodash.conformsTo', link: '/guide/语言/lodash.conformsTo' },
          { text: 'lodash.eq', link: '/guide/语言/lodash.eq' },
          { text: 'lodash.gt', link: '/guide/语言/lodash.gt' },
          { text: 'lodash.gte', link: '/guide/语言/lodash.gte' },
          { text: 'lodash.isArguments', link: '/guide/语言/lodash.isArguments' },
          { text: 'lodash.isArray', link: '/guide/语言/lodash.isArray' },
          { text: 'lodash.isArrayBuffer', link: '/guide/语言/lodash.isArrayBuffer' },
          { text: 'lodash.isArrayLike', link: '/guide/语言/lodash.isArrayLike' },
          { text: 'lodash.isArrayLikeObject', link: '/guide/语言/lodash.isArrayLikeObject' },
          { text: 'lodash.isBoolean', link: '/guide/语言/lodash.isBoolean' },
          { text: 'lodash.isBuffer', link: '/guide/语言/lodash.isBuffer' },
          { text: 'lodash.isDate', link: '/guide/语言/lodash.isDate' },
          { text: 'lodash.isElement', link: '/guide/语言/lodash.isElement' },
          { text: 'lodash.isEmpty', link: '/guide/语言/lodash.isEmpty' },
          { text: 'lodash.isEqual', link: '/guide/语言/lodash.isEqual' },
          { text: 'lodash.isEqualWith', link: '/guide/语言/lodash.isEqualWith' },
          { text: 'lodash.isError', link: '/guide/语言/lodash.isError' },
          { text: 'lodash.isFinite', link: '/guide/语言/lodash.isFinite' },
          { text: 'lodash.isFunction', link: '/guide/语言/lodash.isFunction' },
          { text: 'lodash.isInteger', link: '/guide/语言/lodash.isInteger' },
          { text: 'lodash.isLength', link: '/guide/语言/lodash.isLength' },
          { text: 'lodash.isMap', link: '/guide/语言/lodash.isMap' },
          { text: 'lodash.isMatch', link: '/guide/语言/lodash.isMatch' },
          { text: 'lodash.isMatchWith', link: '/guide/语言/lodash.isMatchWith' },
          { text: 'lodash.isNaN', link: '/guide/语言/lodash.isNaN' },
          { text: 'lodash.isNative', link: '/guide/语言/lodash.isNative' },
          { text: 'lodash.isNil', link: '/guide/语言/lodash.isNil' },
          { text: 'lodash.isNull', link: '/guide/语言/lodash.isNull' },
          { text: 'lodash.isNumber', link: '/guide/语言/lodash.isNumber' },
          { text: 'lodash.isObject', link: '/guide/语言/lodash.isObject' },
          { text: 'lodash.isObjectLike', link: '/guide/语言/lodash.isObjectLike' },
          { text: 'lodash.isPlainObject', link: '/guide/语言/lodash.isPlainObject' },
          { text: 'lodash.isRegExp', link: '/guide/语言/lodash.isRegExp' },
          { text: 'lodash.isSafeInteger', link: '/guide/语言/lodash.isSafeInteger' },
          { text: 'lodash.isSet', link: '/guide/语言/lodash.isSet' },
          { text: 'lodash.isString', link: '/guide/语言/lodash.isString' },
          { text: 'lodash.isSymbol', link: '/guide/语言/lodash.isSymbol' },
          { text: 'lodash.isTypedArray', link: '/guide/语言/lodash.isTypedArray' },
          { text: 'lodash.isUndefined', link: '/guide/语言/lodash.isUndefined' },
          { text: 'lodash.isWeakMap', link: '/guide/语言/lodash.isWeakMap' },
          { text: 'lodash.isWeakSet', link: '/guide/语言/lodash.isWeakSet' },
          { text: 'lodash.lt', link: '/guide/语言/lodash.lt' },
          { text: 'lodash.lte', link: '/guide/语言/lodash.lte' },
          { text: 'lodash.toArray', link: '/guide/语言/lodash.toArray' },
          { text: 'lodash.toFinite', link: '/guide/语言/lodash.toFinite' },
          { text: 'lodash.toInteger', link: '/guide/语言/lodash.toInteger' },
          { text: 'lodash.toLength', link: '/guide/语言/lodash.toLength' },
          { text: 'lodash.toNumber', link: '/guide/语言/lodash.toNumber' },
          { text: 'lodash.toPlainObject', link: '/guide/语言/lodash.toPlainObject' },
          { text: 'lodash.toSafeInteger', link: '/guide/语言/lodash.toSafeInteger' },
          { text: 'lodash.toString', link: '/guide/语言/lodash.toString' }
      ]
  },
  {
      text: '数学',
      link: '',
      collapsible: true,
      collapsed: true,
      items: [
          { text: 'lodash.add', link: '/guide/数学/lodash.add' },
          { text: 'lodash.ceil', link: '/guide/数学/lodash.ceil' },
          { text: 'lodash.divide', link: '/guide/数学/lodash.divide' },
          { text: 'lodash.floor', link: '/guide/数学/lodash.floor' },
          { text: 'lodash.max', link: '/guide/数学/lodash.max' },
          { text: 'lodash.maxBy', link: '/guide/数学/lodash.maxBy' },
          { text: 'lodash.mean', link: '/guide/数学/lodash.mean' },
          { text: 'lodash.meanBy', link: '/guide/数学/lodash.meanBy' },
          { text: 'lodash.min', link: '/guide/数学/lodash.min' },
          { text: 'lodash.minBy', link: '/guide/数学/lodash.minBy' },
          { text: 'lodash.multiply', link: '/guide/数学/lodash.multiply' },
          { text: 'lodash.round', link: '/guide/数学/lodash.round' },
          { text: 'lodash.subtract', link: '/guide/数学/lodash.subtract' },
          { text: 'lodash.sum', link: '/guide/数学/lodash.sum' },
          { text: 'lodash.sumBy', link: '/guide/数学/lodash.sumBy' }
      ]
  },
  {
      text: '数字',
      link: '',
      collapsible: true,
      collapsed: true,
      items: [
          { text: 'lodash.clamp', link: '/guide/数字/lodash.clamp' },
          { text: 'lodash.inRange', link: '/guide/数字/lodash.inRange' },
          { text: 'lodash.random', link: '/guide/数字/lodash.random' }
      ]
  },
  {
      text: '对象',
      link: '',
      collapsible: true,
      collapsed: true,
      items: [
          { text: 'lodash.assign', link: '/guide/对象/lodash.assign' },
          { text: 'lodash.assignIn', link: '/guide/对象/lodash.assignIn' },
          { text: 'lodash.assignInWith', link: '/guide/对象/lodash.assignInWith' },
          { text: 'lodash.assignWith', link: '/guide/对象/lodash.assignWith' },
          { text: 'lodash.at', link: '/guide/对象/lodash.at' },
          { text: 'lodash.create', link: '/guide/对象/lodash.create' },
          { text: 'lodash.defaults', link: '/guide/对象/lodash.defaults' },
          { text: 'lodash.defaultsDeep', link: '/guide/对象/lodash.defaultsDeep' },
          {
              text: 'lodash.entries -> toPairs',
              link: '/guide/对象/lodash.entries -> toPairs'
          },
          {
              text: 'lodash.entriesIn -> toPairsIn',
              link: '/guide/对象/lodash.entriesIn -> toPairsIn'
          },
          {
              text: 'lodash.extend -> assignIn',
              link: '/guide/对象/lodash.extend -> assignIn'
          },
          {
              text: 'lodash.extendWith -> assignInWith',
              link: '/guide/对象/lodash.extendWith -> assignInWith'
          },
          { text: 'lodash.findKey', link: '/guide/对象/lodash.findKey' },
          { text: 'lodash.findLastKey', link: '/guide/对象/lodash.findLastKey' },
          { text: 'lodash.forIn', link: '/guide/对象/lodash.forIn' },
          { text: 'lodash.forInRight', link: '/guide/对象/lodash.forInRight' },
          { text: 'lodash.forOwn', link: '/guide/对象/lodash.forOwn' },
          { text: 'lodash.forOwnRight', link: '/guide/对象/lodash.forOwnRight' },
          { text: 'lodash.functions', link: '/guide/对象/lodash.functions' },
          { text: 'lodash.functionsIn', link: '/guide/对象/lodash.functionsIn' },
          { text: 'lodash.get', link: '/guide/对象/lodash.get' },
          { text: 'lodash.has', link: '/guide/对象/lodash.has' },
          { text: 'lodash.hasIn', link: '/guide/对象/lodash.hasIn' },
          { text: 'lodash.invert', link: '/guide/对象/lodash.invert' },
          { text: 'lodash.invertBy', link: '/guide/对象/lodash.invertBy' },
          { text: 'lodash.invoke', link: '/guide/对象/lodash.invoke' },
          { text: 'lodash.keys', link: '/guide/对象/lodash.keys' },
          { text: 'lodash.keysIn', link: '/guide/对象/lodash.keysIn' },
          { text: 'lodash.mapKeys', link: '/guide/对象/lodash.mapKeys' },
          { text: 'lodash.mapValues', link: '/guide/对象/lodash.mapValues' },
          { text: 'lodash.merge', link: '/guide/对象/lodash.merge' },
          { text: 'lodash.mergeWith', link: '/guide/对象/lodash.mergeWith' },
          { text: 'lodash.omit', link: '/guide/对象/lodash.omit' },
          { text: 'lodash.omitBy', link: '/guide/对象/lodash.omitBy' },
          { text: 'lodash.pick', link: '/guide/对象/lodash.pick' },
          { text: 'lodash.pickBy', link: '/guide/对象/lodash.pickBy' },
          { text: 'lodash.result', link: '/guide/对象/lodash.result' },
          { text: 'lodash.set', link: '/guide/对象/lodash.set' },
          { text: 'lodash.setWith', link: '/guide/对象/lodash.setWith' },
          { text: 'lodash.toPairs', link: '/guide/对象/lodash.toPairs' },
          { text: 'lodash.toPairsIn', link: '/guide/对象/lodash.toPairsIn' },
          { text: 'lodash.transform', link: '/guide/对象/lodash.transform' },
          { text: 'lodash.unset', link: '/guide/对象/lodash.unset' },
          { text: 'lodash.update', link: '/guide/对象/lodash.update' },
          { text: 'lodash.updateWith', link: '/guide/对象/lodash.updateWith' },
          { text: 'lodash.values', link: '/guide/对象/lodash.values' },
          { text: 'lodash.valuesIn', link: '/guide/对象/lodash.valuesIn' }
      ]
  },
  {
      text: '字符串',
      link: '',
      collapsible: true,
      collapsed: true,
      items: [
          { text: 'lodash.camelCase', link: '/guide/字符串/lodash.camelCase' },
          { text: 'lodash.capitalize', link: '/guide/字符串/lodash.capitalize' },
          { text: 'lodash.deburr', link: '/guide/字符串/lodash.deburr' },
          { text: 'lodash.endsWith', link: '/guide/字符串/lodash.endsWith' },
          { text: 'lodash.escape', link: '/guide/字符串/lodash.escape' },
          { text: 'lodash.escapeRegExp', link: '/guide/字符串/lodash.escapeRegExp' },
          { text: 'lodash.kebabCase', link: '/guide/字符串/lodash.kebabCase' },
          { text: 'lodash.lowerCase', link: '/guide/字符串/lodash.lowerCase' },
          { text: 'lodash.lowerFirst', link: '/guide/字符串/lodash.lowerFirst' },
          { text: 'lodash.pad', link: '/guide/字符串/lodash.pad' },
          { text: 'lodash.padEnd', link: '/guide/字符串/lodash.padEnd' },
          { text: 'lodash.padStart', link: '/guide/字符串/lodash.padStart' },
          { text: 'lodash.parseInt', link: '/guide/字符串/lodash.parseInt' },
          { text: 'lodash.repeat', link: '/guide/字符串/lodash.repeat' },
          { text: 'lodash.replace', link: '/guide/字符串/lodash.replace' },
          { text: 'lodash.snakeCase', link: '/guide/字符串/lodash.snakeCase' },
          { text: 'lodash.split', link: '/guide/字符串/lodash.split' },
          { text: 'lodash.startCase', link: '/guide/字符串/lodash.startCase' },
          { text: 'lodash.startsWith', link: '/guide/字符串/lodash.startsWith' },
          { text: 'lodash.template', link: '/guide/字符串/lodash.template' },
          { text: 'lodash.toLower', link: '/guide/字符串/lodash.toLower' },
          { text: 'lodash.toUpper', link: '/guide/字符串/lodash.toUpper' },
          { text: 'lodash.trim', link: '/guide/字符串/lodash.trim' },
          { text: 'lodash.trimEnd', link: '/guide/字符串/lodash.trimEnd' },
          { text: 'lodash.trimStart', link: '/guide/字符串/lodash.trimStart' },
          { text: 'lodash.truncate', link: '/guide/字符串/lodash.truncate' },
          { text: 'lodash.unescape', link: '/guide/字符串/lodash.unescape' },
          { text: 'lodash.upperCase', link: '/guide/字符串/lodash.upperCase' },
          { text: 'lodash.upperFirst', link: '/guide/字符串/lodash.upperFirst' },
          { text: 'lodash.words', link: '/guide/字符串/lodash.words' }
      ]
  },
  {
      text: '实用函数',
      link: '',
      collapsible: true,
      collapsed: true,
      items: [
          { text: 'lodash.attempt', link: '/guide/实用函数/lodash.attempt' },
          { text: 'lodash.bindAll', link: '/guide/实用函数/lodash.bindAll' },
          { text: 'lodash.cond', link: '/guide/实用函数/lodash.cond' },
          { text: 'lodash.conforms', link: '/guide/实用函数/lodash.conforms' },
          { text: 'lodash.constant', link: '/guide/实用函数/lodash.constant' },
          { text: 'lodash.defaultTo', link: '/guide/实用函数/lodash.defaultTo' },
          { text: 'lodash.flow', link: '/guide/实用函数/lodash.flow' },
          { text: 'lodash.flowRight', link: '/guide/实用函数/lodash.flowRight' },
          { text: 'lodash.identity', link: '/guide/实用函数/lodash.identity' },
          { text: 'lodash.iteratee', link: '/guide/实用函数/lodash.iteratee' },
          { text: 'lodash.matches', link: '/guide/实用函数/lodash.matches' },
          { text: 'lodash.matchesProperty', link: '/guide/实用函数/lodash.matchesProperty' },
          { text: 'lodash.method', link: '/guide/实用函数/lodash.method' },
          { text: 'lodash.methodOf', link: '/guide/实用函数/lodash.methodOf' },
          { text: 'lodash.mixin', link: '/guide/实用函数/lodash.mixin' },
          { text: 'lodash.noConflict', link: '/guide/实用函数/lodash.noConflict' },
          { text: 'lodash.noop', link: '/guide/实用函数/lodash.noop' },
          { text: 'lodash.nthArg', link: '/guide/实用函数/lodash.nthArg' },
          { text: 'lodash.over', link: '/guide/实用函数/lodash.over' },
          { text: 'lodash.overEvery', link: '/guide/实用函数/lodash.overEvery' },
          { text: 'lodash.overSome', link: '/guide/实用函数/lodash.overSome' },
          { text: 'lodash.property', link: '/guide/实用函数/lodash.property' },
          { text: 'lodash.propertyOf', link: '/guide/实用函数/lodash.propertyOf' },
          { text: 'lodash.range', link: '/guide/实用函数/lodash.range' },
          { text: 'lodash.rangeRight', link: '/guide/实用函数/lodash.rangeRight' },
          { text: 'lodash.runInContext', link: '/guide/实用函数/lodash.runInContext' },
          { text: 'lodash.stubArray', link: '/guide/实用函数/lodash.stubArray' },
          { text: 'lodash.stubFalse', link: '/guide/实用函数/lodash.stubFalse' },
          { text: 'lodash.stubObject', link: '/guide/实用函数/lodash.stubObject' },
          { text: 'lodash.stubString', link: '/guide/实用函数/lodash.stubString' },
          { text: 'lodash.stubTrue', link: '/guide/实用函数/lodash.stubTrue' },
          { text: 'lodash.times', link: '/guide/实用函数/lodash.times' },
          { text: 'lodash.toPath', link: '/guide/实用函数/lodash.toPath' },
          { text: 'lodash.uniqueId', link: '/guide/实用函数/lodash.uniqueId' }
      ]
  },
]
console.log(fs)


list.forEach(item=>{
  item.items.forEach(file=>{
    var paths =  file.link.split('/')
    const fileName = paths.pop() + '.md';
    console.log(`../docs${paths.join('/')}/${fileName}`, `# ${file.text}\n\n`)
    fs.writeFileSync(`./docs${paths.join('/')}/${fileName}`, `# ${file.text}\n\n`)
  })
})
