import Dispatcher from '../Dispatcher'
import Constant from '../constant/editorConstant.js'
import Store from '../store/EditorStore.js'

Dispatcher.register( (action)=>{
	switch(action.type) {
		case Constant.GET_JSON :
			Store.getJson()
		 	break
		case Constant.SELECT_PAGE :
			Store.setPageIndex(action.data.index)
			break
		case Constant.SELECT_ELEMENT :
			Store.resetElementId(action.data.selectElementId)
			break
	}
})

export default {
	getJson: ()=>{
		Dispatcher.dispatch({
			type: Constant.GET_JSON
		})
	},
	
	resetElementId: (id)=>{
		Dispatcher.dispatch({
			type: Constant.SELECT_ELEMENT,
			data: {
				selectElementId: id
			}
		})
	}
}