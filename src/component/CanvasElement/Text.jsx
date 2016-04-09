import '../../lib/animate.css'
import '../../lib/jquery.lettering.js'
import '../../lib/jquery.textillate.js'
import Wrapper from '../Wrapper.jsx'

import { deepCompare } from '../../util/func.js'

const Text = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
		// elementId 可以为undefined
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId
		let selectElementId = this.props.selectElementId

		return (
			<Wrapper element={ element } elementId={ elementId } selectElementId={ selectElementId }>
				<LetteringP lettering={ element.lettering } content={ element.content } effect={ element.effect } />
			</Wrapper>
		)
	}
})

// 做文字特效用
const LetteringP = React.createClass({
	propTypes: {
		// lettering: React.PropTypes.object.isRequired
	},

	componentDidMount() {
		this.showLetterEffect()
	},

	shouldComponentUpdate(nextProps) {
		// 动画效果变化时也要重新渲染，因为要结合动画和文字特效
		return this.props.effect !== nextProps.effect || this.props.lettering !== nextProps.lettering || this.props.content !== nextProps.content
	},

	componentDidUpdate() {
		this.showLetterEffect()
	},

	componentWillReceiveProps(nextProps) {
		this.refs.text.innerHTML = nextProps.content
	},

	showLetterEffect() {
		let lettering = this.props.lettering
		let content = this.props.content

		if ( lettering ) {
			$(this.refs.text).removeData() // data会使textillate无法再次执行
			$(this.refs.text).textillate({
				initialDelay: lettering.initDelay,
				in: {
					effect: lettering.effect,
					delay: lettering.delay
				}
			})
		}
	},

	render() {
		let content = this.props.content

		return (
			<p ref="text">{ content }</p>
		)
	}
})

export default Text