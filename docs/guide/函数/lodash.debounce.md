### `_.debounce(func, [wait=0], [options=])`[​](#_debouncefunc-wait0-options "_debouncefunc-wait0-options的直接链接")

创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 `wait` 毫秒后调用 `func` 方法。 debounced（防抖动）函数提供一个 `cancel` 方法取消延迟的函数调用以及 `flush` 方法立即调用。 可以提供一个 options（选项） 对象决定如何调用 `func` 方法，`options.leading` 与|或 `options.trailing` 决定延迟前后如何触发（注：是 先调用后等待 还是 先等待后调用）。 `func` 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 后续调用的 debounced（防抖动）函数返回是最后一次 `func` 调用的结果。  
  
**注意:** 如果 `leading` 和 `trailing` 选项为 `true`, 则 `func` 允许 trailing 方式调用的条件为: 在 `wait` 期间多次调用防抖方法。  
  
如果 `wait` 为 `0` 并且 `leading` 为 `false`, `func`调用将被推迟到下一个点，类似`setTimeout`为`0`的超时。  
  
See[David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)for details over the differences between[`_.debounce`](#debounce) and[`_.throttle`](#throttle).

#### 添加版本

0.1.0

#### 参数

1.  `func` _(Function)_: 要防抖动的函数。
2.  `[wait=0]` _(number)_: 需要延迟的毫秒数。
3.  `[options=]` _(Object)_: 选项对象。
4.  `[options.leading=false]` _(boolean)_: 指定在延迟开始前调用。
5.  `[options.maxWait]` _(number)_: 设置 `func` 允许被延迟的最大值。
6.  `[options.trailing=true]` _(boolean)_: 指定在延迟结束后调用。

#### 返回

_(Function)_: 返回新的 debounced（防抖动）函数。

#### 例子

```js
// 避免窗口在变动时出现昂贵的计算开销。
jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 
// 当点击时 `sendMail` 随后就被调用。
jQuery(element).on('click', _.debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}));
 
// 确保 `batchLog` 调用1次之后，1秒内会被触发。
var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
var source = new EventSource('/stream');
jQuery(source).on('message', debounced);
 
// 取消一个 trailing 的防抖动调用
jQuery(window).on('popstate', debounced.cancel);

```