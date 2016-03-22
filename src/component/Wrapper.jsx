import ElementAction from '../action/ElementAction.js'
import EditorAction from '../action/EditorAction.js'

import '../static/stylus/wrapper.stylus'

const ElementWrapper = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired,
		elementId: React.PropTypes.any.isRequired
	},

	componentDidMount() {},

	componentDidUpdate() {},

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
		ElementAction.flex(this.props.element, this.props.elementId, event.clientX, event.clientY, direction)
	},

	setElementId(event) {
		EditorAction.setElementId(this.props.elementId)
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId
		let selectElementId = this.props.selectElementId
		let style = element.style
		let className = selectElementId == elementId ? 'wrapper active animated' : 'wrapper animated'
		let effect = element.effect
		let effectIn = effect['in'] ? ( effect['in']['effect'] ? effect['in']['effect'] : undefined ) : undefined

		if (effectIn) 
			className += ` ${effectIn}`

		return (
			<div className={ className } style={ style } onClick={ this.setElementId } onMouseDown={ this.drag } ref="wrapper">
				{ this.props.children }
				<div className="leftToFlex flexCircle" onMouseDown={this.flex.bind(null, 'left')}></div>
				<div className="rightToFlex flexCircle" onMouseDown={this.flex.bind(null, 'right')}></div>
				<div className="topToFlex flexCircle" onMouseDown={this.flex.bind(null, 'top')}></div>
				<div className="bottomToFlex flexCircle" onMouseDown={this.flex.bind(null, 'bottom')}></div>
			</div>
		)
	}
})

export default ElementWrapper