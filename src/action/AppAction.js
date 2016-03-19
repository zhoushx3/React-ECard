import Dispatcher from '../Dispatcher'
import { GET_JSON } from '../constant/AppConstant.js'
import AppStore from '../store/AppStore.js'
/*
	往后的store要用ensure引入
*/
export default {
	getJson: ()=>{
		Dispatcher.dispatch({
			type: GET_JSON
		})
	}
}