import EventDispatcher from '../event/EventDispatcher'

/**
 *
 * Created Date: 2019-08-18, 00:29:11 (zhenliang.sun)
 * Last Modified: 2019-08-18, 01:39:22 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

export default class Timer extends EventDispatcher {
  constructor(delay, repeatCount = 0) {
    super()
    this.delay = delay
    this.repeatCount = +repeatCount

    this._currentCount = 0
    this._running = false
  }

  reset() {
    this.stop()
    this._currentCount = 0
  }

  start() {
    if(this.running) {
      return
    }
    this._running = true
  }

  stop() {
    if(!this.running) {
      return
    }
    this._running = false
  }

  set delay(val) {
    if(val < 1) {
      val = 1
    }

    if(this._delay === val) {
      return
    }

    this._delay = val
  }

  get delay() {
    return this._delay
  }

  get currentCount() {
    return this._currentCount
  }

  get running() {
    return this._running
  }
}
