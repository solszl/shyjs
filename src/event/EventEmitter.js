/**
 * 
 * Created Date: 2019-03-03, 1:26:38 (zhenliang.sun)
 * Last Modified: 2019-03-03, 2:48:55 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 * 
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */


/**
 * 时间派发器, 全局事件派发接收器
 *
 * @export
 * @class EE
 * @author zhenliang.sun
 */
export default class EE {
  static CORE = new Core();
  constructor(action, fn, replies, delay) {
    this.action = action;
    this.fn = fn;
    this.replies = replies;
    this.delay = delay;
    CORE.register(this);
  }

  /**
   * 添加监听
   *
   * @static
   * @param {*} action 事件名字
   * @param {*} listener 函数
   * @param {number} [replies=0] 重复次数，执行次数过后，移除事件以及监听函数
   * @param {number} [delay=0] 每次调用延迟毫秒数
   * @returns
   * @memberof EE
   */
  static on(action, listener, replies = 0, delay = 0) {
    return new EE(action, listener, replies, delay);
  }
  /**
   * 派发事件
   *
   * @static
   * @param {*} action
   * @param {*} args
   * @memberof EE
   */
  static emit(action, ...args) {
    CORE.emit(action, ...args);
  }

  /**
   * 关闭某个监听
   *
   * @static
   * @param {*} action
   * @param {*} listener
   * @memberof EE
   */
  static off(action, listener) {
    CORE.off(action, listener);
  }
  /**
   * 全局是否监听过action
   *
   * @static
   * @param {*} action
   * @memberof EE
   */
  static has(action) {
    CORE.has(action);
  }

  /**
   * 关闭所有
   *
   * @static
   * @memberof EE
   */
  static offAll() {
    CORE.offAll();
  }
}

class Core {
  constructor() {
    let events = new Map();
    this.events = events;
  }

  register(ee) {
    let ees = this.events.has(ee.action) ? this.events.get(ee.action) : [];
    ees.push(ee);
    this.events.set(ee.action, ees);
  }

  emit(action, ...args) {
    if (!this.has(action)) {
      return;
    }

    let ees = this.events.get(action);
    // TODO: 派发事件！
  }

  off(action, listener) {
    if (!this.has(action)) {
      return;
    }

    let ees = this.events.has(action) ? this.events.get(action) : [];
    if (ees.length === 0) {
      this.events.delete(action);
      return;
    }

    ees = ees.filter(ee => ee.listener !== listener);
    this.events.set(action, ees);
  }

  has(action) {
    return this.events.has(action);
  }

  offAll() {
    this.events.clear();
  }
}