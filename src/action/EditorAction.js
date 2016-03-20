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
	}
})

export default {
	getJson: ()=>{
		Dispatcher.dispatch({
			type: GET_JSON
		})
	}
}