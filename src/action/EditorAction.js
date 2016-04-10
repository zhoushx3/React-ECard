// import Constant from '../constant/editorConstant.js'
import Store from '../store/EditorStore.js'
import Func from '../util/func.js'

class EditorAction {
	construtor() {
		copyElement = null
	}
	/*
		添加画布元素
		@type -> geometric / icon / img / text
		@c    -> the className or 
	*/
	addElement(type, c) {
		switch (type) {
			case 'text':
				Store.addElement(textTemplate())
			break
			case 'flip_3D':
				Store.addElement(flip_3DTemplate())
			break
		}
	}
	/*
		选择画布元素并在右侧显示对应工具
		@id: json.content中的键即id
	*/
	resetElementId(id) {
		Store.resetElementId(id)
	}
	// 准备copy的元素
	preCopy(element) {
		this.copyElement = element
	}
	paste() {
		if (!this.copyElement) 
			return false
		let newElement = Func.deepCopy(this.copyElement)
		newElement.position = {
			left: parseInt(newElement.position.left)+40+'px',
			top: parseInt(newElement.position.top)+40+'px'
		}
		// this.copyElement = null
		Store.addElement(newElement)
	}
	// 删除元素
	deleteElement(key) {
		Store.deleteElement(key)
	}
	// 添加组合模板
	addGroupModule(key) {
		$.ajax({
			url: `src/data/modules/${key}.json`,
			success: function(d) {
				if (d) {
					Store.addGroupModule(d)
				} else {
					alert('what?')
				}
			}
		})
	}
}

function textTemplate() {
	return {
		type: 'text',
		content: '填入文本',
		style: {
			left: '200px',
			top: '200px',
			color: '#000',
			width: '200px',
			height: '30px',
			fontSize: '16px',
			textAlign: 'center',
			lineHeight: '20px',
			letterSpacing: '4px',
		},
		effect: {
			in: {
				effect: 'bounceIn'
			}
		},
		// 是否碎字
		lettering: null
	}
}

function flip_3DTemplate() {
	return {
		type: 'flip3D',
		style: {
			left: '100px',
			top: '100px',
			width: '200px',
			height: '300px',
		},
		src: 'src/static/images/1.jpg',
		effect: {
			in: null
		},
	}
}

export default new EditorAction()

/*
 style: 给wrapper使用，利用传递效果给后代样式
 option: 给wrapper包裹下的具体某个组件的样式
*/