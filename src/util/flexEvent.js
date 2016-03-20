import listener from './listener.js'
import { CANVAS } from './conf.js'
/*
	FlexEvent: 监听元素拉伸
*/
class FlexEvent {
	/*
		@ callback  -> mousemove回调的操作
		@ container -> 负责监听的容器，避免使用document
		@ elementId -> 负责存储监听的元素ID(即数组下标)
		@ clientX/Y -> 存放点击时鼠标的位置
	*/
	constructor(container) {
		this.container = document.getElementById(container)
		this.elementId = undefined
		this.clientX = 0
		this.clientY = 0
		this.callback = undefined
		this.init()
	}

	init() {
		let self = this

		listener(self.container, 'mouseup', (event)=>{
			self.elementId = undefined
			self.callback = undefined
		})

		Listener(this.container, 'mousemove', (event)=>{
			if ( self.elementId  ) {

				let clientX = event.clientX,
						clientY = event.clientY,
						delX = clientX - self.clientX,
						delY = clientY - self.clientY,
						direction = self.direction,
						elementId  = self.elementId

				switch (direction) {
					case 'left':
						self.clientX = clientX
						self.callback(elementId, delX, direction)
					break
					case 'right':
						self.clientX = clientX
						self.callback(elementId, delX, direction)
					break
					case 'top':
						self.clientY = clientY
						self.callback(elementId, delY, direction)
					break
					case 'bottom':
						self.clientY = clientY
						self.callback(elementId, delY, direction)
					break
				}
			}
		})
	}

	flex(elementId, eventX, eventY, direction, callback) {
		this.elementId = elementId
		this.eventX = eventX
		this.eventY = eventY
		this.direction = direction
		this.callback = callback
	}
}

export default new FlexEvent(CANVAS)