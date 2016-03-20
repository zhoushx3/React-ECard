import Dispatcher from '../Dispatcher'
// import dragEvent from '../util/dragEvent.js'

import Constant from '../constant/editorConstant.js'
import Store from '../store/EditorStore.js'

Dispatcher.register( (action)=>{
	switch(action.type) {
		case Constant.SET_ELEMENT :
			let { elementId, property, value } = action.data
			Store.setElement(elementId, property, value)
		 	break
	}
})

export default {
	// drag: (elementId, eventX, eventY) => {
	// 	dragEvent.drag(elementId, eventX, eventY, () => {
	// 		Dispatcher.dispatch({
	// 			type: Constant.GET_JSON
	// 		})
	// 	})
	// },
	// property 指style的属性, value是属性值
	setStyle: (elementId, property, value) => {
		Dispatcher.dispatch({
			type: Constant.SET_ELEMENT,
			data: {
				elementId: elementId,
				property: property,
				value: value
			}
		})
	}

}
