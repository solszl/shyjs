/**
 *
 *
 * @class DD
 * @author zhenliang.sun
 */
class DD {
  constructor() {
    this.isDragging = false
  }
}

const DragEvent = {
  DragEnter: 'Shy.DragEnter',
  DragComplete: 'Shy.DragComplete',
  DragStart: 'Shy.DragStart',
  DragDrop: 'Shy.DragDrop',
  DragExit: 'Shy.DragExit',
  DragOver: 'Shy.DragOver'
}
module.exports = {
  DD,
  DragEvent
}
