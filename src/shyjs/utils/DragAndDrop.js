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
  DRAG_ENTER: 'Shy.dragEnter',
  DRAG_COMPLETE: 'Shy.dragComplete',
  DRAG_START: 'Shy.dragStart',
  DRAG_DROP: 'Shy.dragDrop',
  DRAG_EXIT: 'Shy.dragExit',
  DRAG_OVER: 'Shy.dragOver'
}
module.exports = {
  DD,
  DragEvent
}
