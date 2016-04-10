import ElementAction from '../action/ElementAction.js'
import EditorAction from '../action/EditorAction.js'

import '../static/stylus/wrapper.stylus'

const Wrapper = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired,
	},

	componentDidMount() {},

	componentDidUpdate() {},

	// 拖拽
	// TODO: 需要提前判断click事件是否触发，因为要resetElementID, flex函数同
	drag(event) {
		// 此处是为了禁掉浏览器默认事件，并且禁止节点传播，下同
		event.preventDefault()
		event.stopPropagation()
		ElementAction.drag(this.props.element.sId, event.clientX, event.clientY)
	},

	// 横向纵向伸缩 
	flex(direction, event) {
		event.preventDefault()
		event.stopPropagation()
		ElementAction.flex(this.props.element.sId, event.clientX, event.clientY, direction)
	},

	setElementId(event) {
		EditorAction.resetElementId(this.props.element.sId)
	},

	flexBtns() {
		let self = this
		let type = self.props.element.type
		let btns = []
		switch (type) {
			case 'text':
				btns = ['w', 'e', 's', 'n']
				break
			case 'flip3D':
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
		console.log(element, element.effect)
		let elementId = element.sId
		let selectElementId = this.props.selectElementId
		let style = element.style
		let className = selectElementId == elementId ? 'wrapper active' : 'wrapper'
		let effect = element.effect
		let effectIn = effect['in'] ? ( effect['in']['effect'] ? effect['in']['effect']+' animated' : '' ) : ''
		// effectIn 不直接赋在最外层div是因为如果style中存在transform属性，会被覆盖
		
		return (
			<div className={ className } style={ style } onClick={ this.setElementId } onMouseDown={ this.drag } ref="wrapper">
				<div className={ effectIn } style={ {width: '100%', height: '100%', overflow: 'hidden'} }>
					{ this.props.children }
				</div>
				{ this.flexBtns() }
			</div>
		)
	}
})

export default Wrapper