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
			case 'pic':
				Store.addElement(picTemplate())
			break
			case 'flip_3D':
				Store.addElement(flip_3DTemplate())
			break
			case 'form':
				Store.addElement(formTemplate())
			break
			case 'video':
				Store.addElement(videoTemplate())
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
	// 添加新页
	addPage() {
		Store.addPage(newPage())
	}
	// 切换当前显示的页面
	changePage(pageIndex) {
		Store.setPageIndex(pageIndex)
	}
	// 删除指定页面 
	deletePage(pageIndex) {
		Store.deletePage(pageIndex)
	}
	// 移动指定页面
	movePage(pageIndex, direction) {
		Store.movePage(pageIndex, direction)
	}
	changePageEffect(effect) {
		Store.changePageEffect(effect)
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

function picTemplate() {
	return {
		type: 'pic',
		src: 'src/static/images/default.jpg',
		style: {
			left: '200px',
			top: '200px',
			width: '200px',
			height: '200px',
		},
		effect: {
			in: {
				effect: 'bounceIn'
			}
		},
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

function formTemplate() {
	// style不可修改
	// check1/check2是表单元素，check表示是否需要验证, value是验证的值, placeholder是提示
	return {
		type: 'form',
		style: {
			left: '100px',
			top: '100px',
			width: '250px',
			height: '250px',
		},
		check1: false,
		value1: 1,
		placeholder1: '姓名',
		check2: true,
		value2: 2,
		placeholder2: '年龄',
		effect: {
			in: {
				effect: 'bounceIn'
			}
		},
	}
}

function videoTemplate() {
	return {
  	type: 'video',
  	src: "src/static/1.mp4",
    "style": {
      "left": 0,
      "top": 0,
      "width": '200px',
      "height": "300px",
      "zIndex": 3
    },
  	effect: {
			in: null
		}
  }
}

// 添加新页面初始化有章背景
function newPage() {
	return  {
		content: {
      "0": {
        "type": "background",
        "backgroundEffect": {
        	enable: false,
        	light: '#111122',
        	back: '#FF0022'
        }, // 背景特效
        "style": {
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0,
          "backgroundColor": "#fff",
          "zIndex": 0
        }
      }
		},
		pageEffect: ''
	}
}

export default new EditorAction()

/*
 style: 给wrapper使用，利用传递效果给后代样式
 option: 给wrapper包裹下的具体某个组件的样式
*/