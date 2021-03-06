import assign from 'object-assign'
import Dispatcher from '../Dispatcher.js'
import Event from '../Event.js'
import fakeJson from '../data/fake.js'
import constant from '../constant/editorConstant.js'

const JSON_DATA = 'json_data'

class EditorStore {
	constructor() {
		// 初始化应该从用户的项目数据里读取，暂时是读取fake数据
		window.resetStore = this.resetStore.bind(this)
		this.json = fakeJson
		this.pageIndex = 0
		this.selectElementId = undefined
		this.selectElement = this.selectElementId === undefined ? undefined
											 : this.json.page[this.pageIndex].content[this.selectElementId]
		//undefined表示未选择元素
		window.json = this.json
	}

	getLocalJson() {
		let s = window.localStorage.getItem('json')
		if (s)
			this.json = JSON.parse(s)
	}

	resetStore(json) {
		this.json = json
		this.getJson()
	}

	getJson() {
		Event.emitChange(JSON_DATA, this.json, this.pageIndex, this.selectElementId, this.selectElement)
	}

	_elementsNumber() {
		// 所有元素的个数
		let json = this.json
		let sum = 0
		for (let i of json)
			sum += json[i].content.length
		
		console.log(sum)
		return sum
	}

	addPage(newPage) {
		this.json.page.push(newPage)
		this.setPageIndex(this.json.page.length-1)
	}

	setPageIndex(index) {
		this.pageIndex = index
		this.selectElementId = undefined
		this.selectElement = undefined
		this.getJson()
	}

	// 删除指定页面 
	deletePage(pageIndex) {
		this.json.page.splice(pageIndex, 1)
		this.setPageIndex(pageIndex == 0 ? 0 : pageIndex - 1 )
	}

	// 移动指定页面
	movePage(pageIndex, direction) {
		let page = this.json.page[pageIndex]
		if (direction == 1) {
			this.json.page.splice(pageIndex, 1)
			this.json.page.splice(pageIndex+1, 0, page)
			this.setPageIndex(pageIndex+1)
		} else {
			this.json.page.splice(pageIndex, 1)
			this.json.page.splice(pageIndex-1, 0, page)
			this.setPageIndex(pageIndex-1)
		}
	}
	// 页面入场动画
	changePageEffect(effect) {
		let page = this.json.page[this.pageIndex]
		page['pageEffect'] = effect
		this.json.page[this.pageIndex] = Object.assign({}, page)
		this.getJson()
	}

	// 更新画布上选中的元素ID
	// id == -1 时候 表示要显示 templatePanel
	resetElementId(id) {
		this.selectElementId = id
		this.selectElement = id == undefined ? undefined : this.json.page[this.pageIndex].content[id]
		this.getJson()
	}
	// 修改当前选中的 element 
	setElement(newElement) {
		this.json.page[this.pageIndex].content[this.selectElementId] = newElement
		this.selectElement = newElement
		this.getJson()
	}
	// 添加元素
	addElement(newElement) {
		let currentContent = this.json.page[this.pageIndex].content
		let keys = Object.keys(currentContent)
		let currentId = parseInt(keys[keys.length-1]) + 1 // 长度刚好是下一个元素在数组里的下标
		newElement['style']['zIndex'] = currentId
		currentContent[currentId] = newElement
		this.selectElementId = currentId
		this.selectElement = currentContent[currentId]
		this.getJson()
	}

	deleteElement(key) {
		delete this.json.content[key]
		this.json.content = Object.assign({}, this.json.content)
		this.resetElementId(undefined)
	}

	// 添加组合模板
	addGroupModule(json) {
		if ( typeof json !== 'object')
			return
		for (let i in json) {
			this.addElement(json[i], true)
		}
		this.getJson()
	}
}

export default new EditorStore()