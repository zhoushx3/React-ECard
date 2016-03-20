import assign from 'object-assign'
import Dispatcher from '../Dispatcher.js'
import Event from '../Event.js'
import fakeJson from '../data/fake.js'
import constant from '../constant/editorConstant.js'

const JSON_DATA = 'json_data'

class EditorStore {
	constructor() {
		// 初始化应该从用户的项目数据里读取，暂时是读取fake数据
		this.json = fakeJson
		this.pageIndex = 0
		this.elementId = undefined
		//undefined表示未选择元素
	}

	getJson() {
		Event.emitChange(JSON_DATA, this.json, this.pageIndex, this.elementId)
	}

	setPageIndex(index) {
		this.pageIndex = index
		this.elementId = undefined
		this.getJson()
	}

	selectElement(id) {
		// 直接复制与set有什么区别？为了添加callback?
		this.elementId = id
		this.getJson()
	}

	// property: value对应css属性:值
	setElement(id, property, value) {
		this.json.page[this.pageIndex].content[id].style[property] = value
		this.getJson()
	}
}

export default new EditorStore()