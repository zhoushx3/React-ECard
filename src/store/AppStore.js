import assign from 'object-assign'
import Dispatcher from '../Dispatcher.js'
import Event from '../Event.js'
import fakeJson from '../data/fake.js'
import { GET_JSON } from '../constant/AppConstant.js'


var AppStore = assign({}, Event, {
	json: undefined,

	getJson: function(){
		// 如果json不存在，就拿假数据来初始化
		if (!this.json) {
			this.json = fakeJson
		}
		Event.emitChange(GET_JSON, this.json)
	}
})

Dispatcher.register( (action)=>{
	switch(action.type) {
		case GET_JSON :
			AppStore.getJson()
		 	break
	}
})

export default AppStore