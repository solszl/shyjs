/**
 *
 * Created Date: 2019-08-18, 01:16:48 (zhenliang.sun)
 * Last Modified: 2019-08-18, 02:53:40 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */
import Ticker from '../player/Ticker'
import Log from '../player/utils/Log'

export function getTimer() {
  return Date.now() - Ticker.BOOT_START_TIME
}

export function setInterval() {
  Log.OBJ.warn('unimplemented')
}
export function clearInterval() {
  Log.OBJ.warn('unimplemented')
}
export function setTimeout() {
  Log.OBJ.warn('unimplemented')
}
export function clearTimeout() {
  Log.OBJ.warn('unimplemented')
}
