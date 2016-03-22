import Dispatcher from '../Dispatcher'

import Constant from '../constant/editorConstant.js'
import Store from '../store/EditorStore.js'
import { upper, lower } from '../util/func.js'

class ElementAction {
	constructor() {
		this.init()
	}

	init() {
		Dispatcher.register( (action)=>{
			switch(action.type) {
				case Constant.SET_ELEMENT :
					Store.setElement(action.data.elementId, action.data.newValue)
				 	break
			}
		})
	}
	// 拖拽元素
 	drag(element, elementId, eventX, eventY) {
 		let self = this

		window.dragEvent.drag(elementId, eventX, eventY, (delX, delY) => {
			element.style.left = parseInt(element.style.left) + delX + 'px'
			element.style.top = parseInt(element.style.top) + delY + 'px'

			self.setElement(elementId, element)
		})
	}
	// 拉伸元素
 	flex(element, elementId, eventX, eventY, direction) {
 		let self = this

		window.flexEvent.flex(elementId, eventX, eventY, direction, (del) => {
			self._processFlex(element, elementId, del, direction)
		})
	}
	// 处理拉伸
	_processFlex(element, elementId, del, direction) {
		let minW = 10
		let minH = 10

		let style = element['style']
		let left = parseInt(style['left'])
		let top = parseInt(style['top'])
		let width = parseInt(style['width'])
		let height = parseInt(style['height'])

		switch (direction) {
			case 'left':
				style['left']  = upper( left + del, left + width - minW ) + 'px'
				style['width'] = lower( width - del, minW ) + 'px'
			break
			case 'right':
				style['width'] = lower( width + del, minW ) + 'px'
			break
			case 'top':
				style['top'] = upper( top + del, top + height - minH ) + 'px'
				style['height']  = lower ( height - del, minH ) + 'px'
			break
			case 'bottom':
				style['height'] = lower( height + del, minH ) + 'px'
			break
		}

		this.setElement(elementId, element)
	}
	// 添加动态效果
	changeEffect(element, elementId, effect, way) {
		if (element.effect[way])
			element.effect[way]['effect'] = effect
		else 
			element.effect[way] = {
				effect: effect
			}
		this.setElement(elementId, element)
	}

	setElement(elementId, newValue){
		Dispatcher.dispatch({
			type: Constant.SET_ELEMENT,
			data: {
				elementId: elementId,
				newValue: newValue
			}
		})
	}
}

export default new ElementAction()
