import Dispatcher from '../Dispatcher'
import dragEvent from '../util/dragEvent.js'

import { GET_JSON } from '../constant/editorConstant.js'
import EditorStore from '../store/EditorStore.js'
/*
	往后的store要用ensure引入
*/
export default {
	drag: (eleId, eventX, eventY)=>{
		dragEvent.drag(eleId, eventX, eventY, ()=>{
			Dispatcher.dispatch({
				type: GET_JSON
			})
		})
	}
}
