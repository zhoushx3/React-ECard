import Dispatcher from '../Dispatcher'
// import dragEvent from '../util/dragEvent.js'

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
	// drag: (elementId, eventX, eventY) => {
	// 	dragEvent.drag(elementId, eventX, eventY, () => {
	// 		Dispatcher.dispatch({
	// 			type: Constant.GET_JSON
	// 		})
	// 	})
	// },
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
