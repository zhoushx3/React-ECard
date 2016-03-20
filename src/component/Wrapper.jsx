import React from 'React'
// import ElementAction from '../action/ElementAction.js'
import EditorAction from '../action/EditorAction.js'

import '../static/stylus/wrapper.stylus'

const ElementWrapper = React.createClass({
	propTypes: {
		style: React.PropTypes.object.isRequired,
		elementId: React.PropTypes.any.isRequired
	},

	// 拖拽
	drag(event) {
		// 此处是为了禁掉浏览器默认事件，并且禁止节点传播，下同
		event.preventDefault()
		event.stopPropagation()
		// ElementAction.drag(this.props.id, event.target.clientX, event.target.clientY)
	},

	// 横向纵向伸缩 
	flex(direction, event) {
		event.preventDefault()
		event.stopPropagation()
		// ElementAction.flex(this.props.id, event.target.clientX, event.target.clientY, direction)
	},

	setElementId(event) {
		EditorAction.setElementId(this.props.elementId)
	},

	render() {
		return (
			<div className="wrapper"
					 style={ this.props.style }
					 onClick={ this.setElementId }
					 onMouseDown={ this.drag } >
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