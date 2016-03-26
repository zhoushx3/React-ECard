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
		this.selectElementId = undefined
		this.selectElement = this.selectElementId === undefined ? undefined
											 : this.json.page[this.pageIndex].content[this.selectElementId]
		//undefined表示未选择元素
	}

	getJson() {
		Event.emitChange(JSON_DATA, this.json, this.pageIndex, this.selectElementId)
	}

	setPageIndex(index) {
		this.pageIndex = index
		this.selectElementId = undefined
		this.getJson()
	}
	// 更新画布上选中的元素ID
	resetElementId(id) {
		// 直接复制与set有什么区别？为了添加callback?
		this.selectElementId = id
		this.selectElement = this.json.page[this.pageIndex].content[id]
		this.getJson()
	}
	// 修改当前选中的 element 
	setElement(newElement) {
		this.json.page[this.pageIndex].content[this.selectElementId] = newElement
		this.selectElement = newElement
		this.getJson()
	}
}

export default new EditorStore()