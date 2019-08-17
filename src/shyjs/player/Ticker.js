/**
 *
 * Created Date: 2019-08-18, 00:47:17 (zhenliang.sun)
 * Last Modified: 2019-08-18, 01:01:35 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

/**
 *
 *
 * @export
 * @class Ticker
 * @author zhenliang.sun
 */
export default class Ticker {
  /** 系统启动时间 */
  static BOOT_START_TIME = 0
  constructor() {
    Ticker.BOOT_START_TIME = Date.now()
    this._frameRate = 30
  }

  update() {}

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
}
