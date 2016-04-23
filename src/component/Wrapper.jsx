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

	componentDidMount() {},

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