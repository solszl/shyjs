import Log from './utils/Log'
import Ticker from './Ticker'

/**
 *
 * Created Date: 2019-08-18, 01:07:43 (zhenliang.sun)
 * Last Modified: 2019-08-18, 03:23:13 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

/**
 *
 *
 * @export
 * @class Kernel
 * @author zhenliang.sun
 */
export default class Kernel {
  constructor() {
    Log.OBJ.level = 'all'
    this.start(new Ticker())
  }

  start(ticker) {
    this.info('info', 'Prepare for ShyJS Engine.')
    // replace origin requestAnimate function
    this._replaceAnimateFunction(ticker)
    this._replaceNaN()
    this.info('info', 'Prepare Engine complete.')
    this.info('info', 'start')
  }

  info(type, ...args) {
    Log.OBJ[type](`${args}`)
  }

  _replaceAnimateFunction(ticker) {
    let requestAnimationFrame =
      window['requestAnimationFrame'] ||
      window['webkitRequestAnimationFrame'] ||
      window['oRequestAnimationFrame'] ||
      window['mozRequestAnimationFrame'] ||
      window['msRequestAnimationFrame']

    if(!requestAnimationFrame) {
      requestAnimationFrame = callBK => window.setTimeout(callBK, 1000 / 60)
    }

    const onTick = () => {
      requestAnimationFrame(onTick)
      ticker.update()
    }

    requestAnimationFrame(onTick)
  }

  _replaceNaN() {
    window['isNaN'] = v => v === +v
  }
}
