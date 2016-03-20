import React from 'React'
import ElementAction from '../action/ElementAction.js'
import EditorAction from '../action/EditorAction.js'

import '../static/stylus/wrapper.stylus'

const ElementWrapper = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired,
		elementId: React.PropTypes.any.isRequired
	},

	// 拖拽
	drag(event) {
		// 此处是为了禁掉浏览器默认事件，并且禁止节点传播，下同
		event.preventDefault()
		event.stopPropagation()
		ElementAction.drag(this.props.element, this.props.elementId, event.clientX, event.clientY)
	},

	// 横向纵向伸缩 
	flex(direction, event) {
		event.preventDefault()
		event.stopPropagation()
		// ElementAction.flex(this.props.elementId, event.target.clientX, event.target.clientY, direction)
	},

	setElementId(event) {
		EditorAction.setElementId(this.props.elementId)
	},

	render() {
		let style = this.props.element.style

		return (
			<div className="wrapper"
					 style={ style }
					 onClick={ this.setElementId }
					 onMouseDown={ this.drag } >
				{ this.props.children }
				<div className="leftToFlex flexCircle" onMouseDown={this.drag.bind(null, 'left')}></div>
				<div className="rightToFlex flexCircle" onMouseDown={this.drag.bind(null, 'rifgt')}></div>
				<div className="topToFlex flexCircle" onMouseDown={this.drag.bind(null, 'top')}></div>
				<div className="bottomToFlex flexCircle" onMouseDown={this.drag.bind(null, 'bottom')}></div>
			</div>
		)
	}
})

export default ElementWrapper