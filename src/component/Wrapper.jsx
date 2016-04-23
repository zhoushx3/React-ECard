import ElementAction from '../action/ElementAction.js'
import EditorAction from '../action/EditorAction.js'

import '../static/stylus/wrapper.stylus'

const Wrapper = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired,
	},
	getDefaultProps() {
		let viewer = false
		if (window.location.href.indexOf('viewer') > -1)
			viewer = true
		return  {
			viewer: viewer
		}
	},

	componentDidMount() {
		if ( this.props.viewer )
			return

		let self = this
		let element = this.props.element
		let elementId = this.props.elementId
		let zIndex = parseInt(element.style.zIndex || 0)
		let type = element.type
		if (type === 'background') {
			$.contextMenu({
	      selector: `[data-key=${elementId}]`,
	      animation: {duration: 200, show: 'slideDown', hide: 'slideUp'},
	      className: 'contextmenu-custom contextmenu-custom__highlight',
				zIndex: ()=>{
					return 999
				},
				items: {
					paste: {
						name: '粘贴',
						disabled:()=>{
							return EditorAction.copyElement == null
						},
						callback: (key, opt) => {
							EditorAction.paste()
						}
					}
				}
			})
		} else {
	    $.contextMenu({
	      selector: `[data-key=${elementId}]`,
	      animation: {duration: 200, show: 'slideDown', hide: 'slideUp'},
	      className: 'contextmenu-custom contextmenu-custom__highlight',
	      zIndex: function() {
	      	return zIndex + 1
	      },
	      items: {
	        copy: {
	          name: '复制',
	          callback: (key, opt) => {
	          	EditorAction.preCopy(element)
	          }
	        },
	        delete: {
	        	name: '删除',
	        	callback: () => {
	        		EditorAction.deleteElement(elementId)
	        	}
	        },
	        moveUp: {
	        	name: '上移一层',
	        	callback:(key, opt)=>{
	        		self.moveZIndex(1)
	        	}
	        },
	        moveDown: {
	        	name: '下移一层',
	        	disabled: ()=>{
	      			return zIndex === 0
	        	},
	        	callback:()=>{
	        		this.moveZIndex(-1)
	        	}
	        },
	        moveBottom: {
	        	name: '下移至底层',
	        	callback:()=>{
	        		this.moveZIndex(0)
	        	}
	        }
	      },
	      trigger: 'right',
	      reposition: true,
	      autoHide: false,
	    })
		}

	},

	moveZIndex(n) {
		let element = this.props.element
		let zIndex = parseInt(element.style.zIndex || 0)
		EditorAction.resetElementId(this.props.elementId)
		switch(n) {
			case -1:
				ElementAction.setStyle('zIndex', zIndex-1)
				break
			case 1:
				ElementAction.setStyle('zIndex', zIndex+1)
				break
			case 0:
				ElementAction.setStyle('zIndex', 0)
				break
		}
	},

	componentDidUpdate() {},

	// 拖拽
	// TODO: 需要提前判断click事件是否触发，因为要resetElementID, flex函数同
	drag(event) {
		// 此处是为了禁掉浏览器默认事件，并且禁止节点传播，下同
		if ( this.props.viewer )
			return
		if ( this.props.element.type === 'background')
			return 
		event.preventDefault()
		event.stopPropagation()
		ElementAction.drag(this.props.elementId, event.clientX, event.clientY)
	},

	// 横向纵向伸缩 
	flex(direction, event) {
		if ( this.props.viewer )
			return
		event.preventDefault()
		event.stopPropagation()
		ElementAction.flex(this.props.elementId, event.clientX, event.clientY, direction)
	},

	setElementId(event) {
		if ( this.props.viewer )
			return
		EditorAction.resetElementId(this.props.elementId)
	},

	flexBtns() {
		if ( this.props.viewer )
			return null
		let self = this
		let type = self.props.element.type
		let btns = []
		switch (type) {
			case 'text':
				btns = ['w', 'e', 's', 'n']
				break
			case 'flip3D':
			case 'pic':
			case 'video':
				btns = ['se']
				break
		}
		return btns.map( function( direction, index) {
			if ( direction == 'se')
				return <div key={index} className="se-flex" onMouseDown={self.flex.bind(null, 'se')}></div>
			else
				return <div key={index} className={`${direction}-flex flexCircle`} onMouseDown={self.flex.bind(null, direction)}></div>
		})

	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId
		let selectElementId = this.props.selectElementId
		let style = element.style
		let className = selectElementId == elementId ? 'wrapper active' : 'wrapper'
		let effect = element.effect || {}
		let effectIn = effect['in'] ? ( effect['in']['effect'] ? effect['in']['effect']+' animated' : '' ) : ''
		// effectIn 不直接赋在最外层div是因为如果style中存在transform属性，会被覆盖
		return (
			<div className={ className } data-key={ elementId } style={ style } onClick={ this.setElementId } onMouseDown={ this.drag } ref="wrapper">
				<div className={ effectIn } style={ {width: '100%', height: '100%', overflow: 'hidden'} }>
					{ this.props.children }
				</div>
				{ this.flexBtns() }
			</div>
		)
	}
})

export default Wrapper