/**
 *
 * Created Date: 2019-03-03, 2:56:22 (zhenliang.sun)
 * Last Modified: 2019-08-18, 01:31:15 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

import Stage from './shyjs/display/Stage'
import { Event } from './shyjs/event/Event'
import Timer from './shyjs/utils/Timer'
import TimerEvent from './shyjs/event/TimerEvent'
import Kernel from './shyjs/player/Kernel'
import { getTimer, setInterval, clearInterval, setTimeout, clearTimeout } from './shyjs/utils/extends'
export default class Main {
  constructor() {
    // eslint-disable-next-line no-new
    new Kernel()
  }
}

Main.Stage = Stage
Main.Event = Event
Main.Timer = Timer
Main.TimerEvent = TimerEvent
Main.getTimer = getTimer
Main.setInterval = setInterval
Main.clearInterval = clearInterval
Main.setTimeout = setTimeout
Main.clearTimeout = clearTimeout
