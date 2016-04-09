import listener from './listener.js'
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

		listener(this.container, 'mousemove', (event)=>{
			if ( self.elementId !== undefined ) {

				let clientX = event.clientX,
						clientY = event.clientY,
						delX = clientX - self.clientX,
						delY = clientY - self.clientY,
						direction = self.direction

				switch (direction) {
					case 'w':
					case 'e':
						self.clientX = clientX
						self.callback(delX, 0)
					break
					case 'n':
					case 's':
						self.clientY = clientY
						self.callback(0, delY)
					break
					case 'se':
						self.clientX = clientX
						self.clientY = clientY
						self.callback(delX, delY)
					break
				}
			}
		})
	}

	flex(elementId, clientX, clientY, direction, callback) {
		this.elementId = elementId
		this.clientX = clientX
		this.clientY = clientY
		this.direction = direction
		this.callback = callback
	}
}

export default FlexEvent