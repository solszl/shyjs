/**
 *
 * Created Date: 2019-08-18, 01:16:48 (zhenliang.sun)
 * Last Modified: 2019-08-18, 01:28:34 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */
import Ticker from '../player/Ticker'
import Logger from '../player/utils/Logger'

export function getTimer() {
  return Date.now() - Ticker.BOOT_START_TIME
}

export function setInterval() {
  Logger.OBJ.warn('unimplemented')
}
export function clearInterval() {
  Logger.OBJ.warn('unimplemented')
}
export function setTimeout() {
  Logger.OBJ.warn('unimplemented')
}
export function clearTimeout() {
  Logger.OBJ.warn('unimplemented')
}
