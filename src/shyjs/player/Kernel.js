import Log from './utils/Log'
import Ticker from './Ticker'
import EventDispatcher from '../event/EventDispatcher'
import Event from '../event/Event'
import { StageEvent } from '../display/Stage'
import DisplayObject from '../display/DisplayObject'

/**
 *
 * Created Date: 2019-08-18, 01:07:43 (zhenliang.sun)
 * Last Modified: 2019-08-18, 03:51:30 (zhenliang.sun)
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
export default class Kernel extends EventDispatcher {
  constructor() {
    super()
    Log.OBJ.level = 'all'
    this.start(new Ticker())
  }

  start(ticker) {
    this.info('info', 'Prepare for ShyJS Engine.')
    // replace origin requestAnimate function
    this._replaceAnimateFunction(ticker)
    this._replaceNaN()
    this._addResizeHandler()
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
    window['isNaN'] = v => {
      v = +v
      // eslint-disable-next-line no-self-compare
      return v !== v
    }
  }

  _addResizeHandler() {
    let resizeInterval = NaN
    window.addEventListener('resize', () => {
      if(isNaN(resizeInterval)) {
        resizeInterval = window.setTimeout(() => {
          resizeInterval = NaN
          const evt = new Event(StageEvent.Resize)
          evt.target = window
          DisplayObject.stage.dispatchEvent(evt)
        }, 500)
      }
    })
  }
}
