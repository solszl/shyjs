/**
 *
 * Created Date: 2019-08-07, 01:05:34 (zhenliang.sun)
 * Last Modified: 2019-08-14, 00:39:31 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

/**
 *
 *
 * @export
 * @class EventDispatcher
 * @author zhenliang.sun
 */
export default class EventDispatcher {
  constructor() {
    this._dispatcher = {
      normalListeners: {},
      onceListeners: {}
    }
  }

  on(type, listener) {
    let list = this.dispatcher.normalListeners[type] || []

    list.push(listener)
  }

  once(type, listener) {
    let list = this.dispatcher.onceListeners[type] || []
    list.push(listener)
  }

  off(type, listener) {
    let list = this.dispatcher.normalListeners[type] || []
    let result = list.filter(fn => fn !== listener)
    if(result.length === 0) {
      delete this.dispatcher.normalListeners[type]
      return
    }

    this.dispatcher.normalListeners[type] = result
  }

  offOnce(type, listener) {
    let list = this.dispatcher.onceListeners[type] || []
    let result = list.filter(fn => fn !== listener)
    if(result.length === 0) {
      delete this.dispatcher.onceListeners[type]
      return
    }

    this.dispatcher.onceListeners[type] = result
  }

  offAll() {
    this._dispatcher = {
      normalListeners: {},
      onceListeners: {}
    }
  }

  addEventListener(type, listener) {
    this.on(type, listener)
  }

  dispatchEvent(event) {}
  hasEventListener(type) {
    return this.dispatcher.normalListeners[type] || this.dispatcher.onceListeners[type]
  }

  removeEventListener(type, listener) {
    this.off(type, listener)
  }

  removeEventListeners() {
    this.offAll()
  }

  destroy() {
    this.offAll()
  }

  get dispatcher() {
    return this._dispatcher
  }
}
