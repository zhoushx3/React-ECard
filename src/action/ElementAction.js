import Dispatcher from '../Dispatcher'

import Constant from '../constant/editorConstant.js'
import Store from '../store/EditorStore.js'

Dispatcher.register( (action)=>{
	switch(action.type) {
		case Constant.SET_ELEMENT :
			Store.setElement(action.data.elementId, action.data.newValue)
		 	break
	}
})

export default {
	drag: (element, elementId, eventX, eventY) => {
		window.dragEvent.drag(elementId, eventX, eventY, (delX, delY) => {
			element.style.left = parseInt(element.style.left) + delX + 'px'
			element.style.top = parseInt(element.style.top) + delY + 'px'

			Dispatcher.dispatch({
				type: Constant.SET_ELEMENT,
				data: {
					elementId: elementId,
					newValue: element
				}
			})
		})
	},

	setElement: (elementId, newValue) => {
		Dispatcher.dispatch({
			type: Constant.SET_ELEMENT,
			data: {
				elementId: elementId,
				newValue: newValue
			}
		})
	}, 

}
