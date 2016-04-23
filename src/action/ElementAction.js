// import Dispatcher from '../Dispatcher'

import Constant from '../constant/editorConstant.js'
import Store from '../store/EditorStore.js'
import { upper, lower, deepCopy, gouGu } from '../util/func.js'

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

		window.flexEvent.flex(elementId, eventX, eventY, direction, (delX, delY) => {
			self._processFlex(delX, delY, direction)
		})
	}
	// 处理拉伸
	_processFlex(delX, delY, direction) {
		let minW = 10
		let minH = 10
		let ele = Store.selectElement
		let type = ele.type
		let style = ele['style']
		let left = parseInt(style['left'])
		let top = parseInt(style['top'])
		let width = parseInt(style['width'])
		let height = parseInt(style['height'])

		switch (direction) {
			case 'w':
				style['left']  = upper( left + delX, left + width - minW ) + 'px'
				style['width'] = lower( width - delX, minW ) + 'px'
			break
			case 'e':
				style['width'] = lower( width + delX, minW ) + 'px'
			break
			case 'n':
				style['top'] = upper( top + delY, top + height - minH ) + 'px'
				style['height']  = lower ( height - delY, minH ) + 'px'
			break
			case 's':
				style['height'] = lower( height + delY, minH ) + 'px'
			break
			case 'se':
				if ( ['flip3D', 'pic', 'video'].indexOf(type) > -1 ) {
					style['width'] = lower( width + delX, minW ) + 'px'
					style['height'] = lower( height + delY, minH ) + 'px'
				}
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
			case 'backgroundColor':
			case 'color':
				ele.style[property] = event
				break
			case 'backgroundEffectEnable':
				ele['backgroundEffect']['enable'] = event
				break
			case 'light':
				ele['backgroundEffect']['light'] = event
				break
			case 'back':
				ele['backgroundEffect']['back'] = event
				break
			case 'src':
				ele['src'] = event
				break
			case 'check1':
			case 'check2':
			case 'placeholder1':
			case 'placeholder2':
			case 'value1':
			case 'value2':
				ele[property] = event
			break
		}

		Store.setElement(ele) // 重点是为了让 store 通知更新 View 
	}
	// 用于设置模板的一些属性
	setTemplateStyle(property, event) {
		let ele = Store.selectElement

		switch ( property ) {
			case 'text':
				ele.text = event.target.value ? event.target.value.substr(0, 100) : ''
				break
			case 'src':
				ele.src= event
				break
		}

		Store.setElement(ele) // 重点是为了让 store 通知更新 View 
	}
}

export default new ElementAction()
