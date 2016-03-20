import React from 'React'
import ElementAction from '../action/ElementAction.js'

const ElementWrapper = React.createClass({

	// 拖拽
	drag(event) {
		// 此处是为了禁掉浏览器默认事件，并且禁止节点传播，下同
		event.preventDefault()
		event.stopPropagation()
		ElementAction.drag(this.props.id, event.target.clientX, event.target.clientY)
	},

	// 横向纵向伸缩 
	flex(direction, event) {
		event.preventDefault()
		event.stopPropagation()
		ElementAction.flex(this.props.id, event.target.clientX, event.target.clientY, direction)
	},

	render() {
		return (
			<div className="wrapper" onMouseDown={ this.drag }>
				{ this.props.children }
				<div className="leftToFlex flexCircle"></div>
				<div className="rightToFlex flexCircle"></div>
				<div className="topToFlex flexCircle"></div>
				<div className="bottomToFlex flexCircle"></div>
			</div>
		)
	}
})

export default ElementWrapper