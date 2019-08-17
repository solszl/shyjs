import { Event } from './Event'

/**
 *
 * Created Date: 2019-08-18, 00:31:49 (zhenliang.sun)
 * Last Modified: 2019-08-18, 00:40:45 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

export default class TimerEvent extends Event {
  static TIMER = 'Shy.TimerEvent.Timer'
  static TIMER_COMPLETE = 'Shy.TimerEvent.TimerComplete'
  constructor() {
    super()
  }
}
