/**
 * 防多触
 * @param {Function} func -需要函数防抖的函数
 * @param {Number} time -延迟时间
 **/

const debounce = function (func, time = 300) {
  let timer;
  const _debounce = function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    // 延时触发
    timer = setTimeout(() => {
      func.call(this, ...args);
      timer = null;
    }, time);
  };

  /**
   * 取消函数
   **/
  _debounce.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };
  return _debounce;
};

/**
 * 限流
 * @param {Function} func -需要函数防抖的函数
 * @param {Number} time - 多长时间不能再次点击
 **/

const throttle = (func, time = 300) => {
  let last = 0;
  const _throttle = function (...args) {
    let now = new Date().getTime();
    let isOk = now - last > time;

    if (isOk) {
      func.call(this, ...args);
      last = now;
    }
  };
  return _throttle;
};

export { debounce, throttle };
