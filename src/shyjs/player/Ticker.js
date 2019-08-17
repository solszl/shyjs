import DisplayObject from '../display/DisplayObject'
import Event from '../event/Event'

/**
 *
 * Created Date: 2019-08-18, 00:47:17 (zhenliang.sun)
 * Last Modified: 2019-08-18, 03:07:03 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

/**
 *
 *
 * @class Ticker
 * @author zhenliang.sun
 */
export default class Ticker {
  /** 系统启动时间 */
  static BOOT_START_TIME = Date.now()
  constructor() {
    Ticker.BOOT_START_TIME = Date.now()
    this._frameRate = 30
  }

  addTask(callBack, context) {}
  removeTask(callBack, context) {}
  update() {
    this._render()
    this._broadcastEnterFrame()
  }

  set frameRate(val) {
    if(val <= 0 || val === this._frameRate) {
      return
    }

    if(val >= 60) {
      val = 60
    }

    this._frameRate = val
  }

  get frameRate() {
    return this._frameRate
  }

  _render() {
    let list = DisplayObject.renderCallBKList
  }

  /** 广播enterFrame 事件 */
  _broadcastEnterFrame() {
    let list = DisplayObject.enterFrameCallBKList
    if(list.length === 0) {
      return
    }

    list.forEach(displayObject => {
      displayObject.dispatchEvent(new Event(Event.ENTER_FRAME))
    })
  }
}
