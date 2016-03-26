// import Dispatcher from '../Dispatcher'

import Constant from '../constant/editorConstant.js'
import Store from '../store/EditorStore.js'
import { upper, lower, deepCopy } from '../util/func.js'

class ElementAction {
	constructor() {}

	// 拖拽元素
 	drag(elementId, eventX, eventY) {
 		let self = this
 		Store.resetElementId(elementId)

		window.dragEvent.drag(elementId, eventX, eventY, (delX, delY) => {
			let ele = Store.selectElement
			ele.style.left = parseInt(ele.style.left) + delX + 'px'
			ele.style.top = parseInt(ele.style.top) + delY + 'px'
			Store.setElement(ele)
		})
	}
	// 拉伸元素
 	flex(elementId, eventX, eventY, direction) {
 		let self = this

		window.flexEvent.flex(elementId, eventX, eventY, direction, (del) => {
			self._processFlex(del, direction)
		})
	}
	// 处理拉伸
	_processFlex(del, direction) {
		let minW = 10
		let minH = 10
		let ele = Store.selectElement
		let style = ele['style']
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

		Store.setElement(ele)
	}
	// 添加过场动画效果
	// 深复制是为了做 componentShouldUpdate()的判断, 下同
	changeEffect(effect, way) {
		let element = deepCopy(Store.selectElement)

		if (element.effect[way])
			element.effect[way]['effect'] = effect
		else 
			element.effect[way] = {
				effect: effect
			}
		Store.setElement(element)
	}
	// 添加文字特效
	changeLetteringEffect(effect, delay, initDelay) {
		let element = deepCopy(Store.selectElement)

		if (effect == null)
			element.lettering = null
		else {
			element.lettering['effect'] = effect
			element.lettering['delay'] = delay
			element.lettering['initDelay'] = initDelay
		}
		Store.setElement(element)
	}
	// 设置样式
	// event == event(事件本身) || value(传入前已被修改的value)
	setStyle(property, event) {
		let ele = Store.selectElement

		switch ( property ) {
			case 'letterSpacing':
			case 'lineHeight':
			case 'fontSize':
			case 'height':
			case 'width':
			case 'left':
			case 'top':
				ele.style[property] = ( event.target.value || 0 ) + 'px'
				break
			case 'content':
				ele.content = event.target.value ? event.target.value.substr(0, 100) : ''
				break
			case 'opacity':
				ele.style['opacity'] = event/100
				break
			case 'rotate':
				ele.style['transform'] = `rotate(${event}deg)`
				break
			case 'textAlign':
				ele.style['textAlign'] = event
				break

		}

		Store.setElement(ele) // 重点是为了让 store 通知更新 View 
	}
}

export default new ElementAction()
