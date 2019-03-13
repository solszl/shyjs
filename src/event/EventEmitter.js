/**
 *
 * Created Date: 2019-03-03, 1:26:38 (zhenliang.sun)
 * Last Modified: 2019-03-03, 16:57:50 (zhenliang.sun)
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
class EE {
  /**
   * Creates an instance of EE.
   * @param {*} action
   * @param {*} fn
   * @param {*} repeats
   * @param {*} delay
   * @memberof EE
   */
  constructor(action, fn, repeats, delay) {
    this.action = action
    this.fn = fn
    this.repeats = repeats
    this.delay = delay

    CORE.register(this)
  }

  /**
   * 添加监听
   *
   * @static
   * @param {*} action 事件名字
   * @param {*} listener 函数
   * @param {number} [repeats=-1] 重复次数，执行次数过后，移除事件以及监听函数
   * @param {number} [delay=0] 每次调用延迟毫秒数
   * @returns
   * @memberof EE
   */
  static on(action, listener, repeats = -1, delay = 0) {
    return new EE(action, listener, repeats, delay)
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
    CORE.emit(action, ...args)
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
    CORE.off(action, listener)
  }
  /**
   * 全局是否监听过action
   *
   * @static
   * @param {*} action
   * @memberof EE
   */
  static has(action) {
    CORE.has(action)
  }

  /**
   * 关闭所有
   *
   * @static
   * @memberof EE
   */
  static offAll() {
    CORE.offAll()
  }
}

class Core {
  constructor() {
    this.evts = new Map()
  }

  register(ee) {
    let ees = this.evts.has(ee.action) ? this.evts.get(ee.action) : []
    ees.push(ee)
    this.evts.set(ee.action, ees)
  }

  emit(action, ...args) {
    if(!this.has(action)) {
      return
    }

    let ees = this.evts.get(action)

    ees.forEach((ee, i, a) => {
      if(ee.repeats > 0) {
        DelayCall.executeRepeat(ee, ...args)
      } else if(ee.repeats === 0) {
        // once
        DelayCall.execute(ee, ee.delay, ...args)
        a.splice(i, 1)
      } else {
        DelayCall.execute(ee, ee.delay, ...args)
      }
    })
  }

  off(action, listener) {
    if(!this.has(action)) {
      return
    }

    let ees = this.evts.has(action) ? this.evts.get(action) : []
    if(ees.length === 0) {
      this.evts.delete(action)
      return
    }

    DelayCall.clear(action, listener)
    ees = ees.filter(ee => ee.listener !== listener)
    this.evts.set(action, ees)
  }

  has(action) {
    return this.evts.has(action)
  }

  offAll() {
    DelayCall.clear()
    this.evts.clear()
  }
}
var delayCallIds = []
class DelayCall {
  static executeRepeat(ee, ...args) {
    let count = 0
    while(count < ee.repeats) {
      const delay = count * ee.delay
      DelayCall.execute(ee, delay, ...args)
      count += 1
    }
  }

  static execute(ee, delay, ...args) {
    if(delay === 0) {
      ee.fn.call(null, ...args)
      return
    }

    let timeoutId = setTimeout(() => {
      ee.fn.call(null, ...args)
    }, delay)

    let action = ee.action
    let fn = ee.fn
    delayCallIds.push({
      timeoutId,
      action,
      fn
    })
  }

  static clear(action, fn) {
    delayCallIds.forEach(item => {
      if(action && fn) {
        if(item.action === action && item.fn === fn) {
          clearTimeout(item.timeoutId)
        }
      } else if(action && !fn) {
        if(item.action === action) {
          clearTimeout(item.timeoutId)
        }
      } else {
        clearTimeout(item.timeoutId)
      }
    })
  }
}

var CORE = new Core()
module.exports = EE
