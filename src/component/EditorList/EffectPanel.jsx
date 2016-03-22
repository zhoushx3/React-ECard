import Font from './Font.jsx'
import Size from './Size.jsx'
import Position from './Position.jsx'
import TextAlign from './TextAlign.jsx'
import Percentage from './Percentage.jsx'

import ElementAction from '../../action/ElementAction.js'

import '../../lib/animate.css'
import '../../lib/jquery.lettering.js'
import '../../lib/jquery.lettering.js'
import animateName from '../../lib/animateName.js'


const EffectPanel = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	componentDidMount() {
		$('.animated.effectModule').bind('webkitAnimationEnd', function(event) {
			if ($(this).hasClass('active'))
				$(this).removeClass().addClass('animated effectModule active')
			else
				$(this).removeClass().addClass('animated effectModule')
		})
	},

	componentWillUnmount() {
		$('.animated.effectModule').unbind('webkitAnimationEnd')
	},

	letterringEffect(ele, effect, option) {

	},

	addEffect(effect, event) {
		$(event.target).addClass(effect)
	},

	chooseEffect(effect, way) {
		ElementAction.changeEffect(this.props.element, this.props.elementId, effect, way)
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId
		let className = this.props.className
		let eleffect = element.effect
				eleffect = eleffect['in'] ? ( eleffect['in']['effect'] ? eleffect['in']['effect'] : undefined ) : undefined
		let effectKey = Object.keys(animateName)

		let inEffect = effectKey.map( (effect, i)=>{
			let c = eleffect == effect ? 'animated effectModule active' : 'animated effectModule'
			return <div className={ c }
									onMouseEnter={ this.addEffect.bind(null, effect) }
									onClick={ this.chooseEffect.bind(this, effect, 'in') }
									key={i}>{ animateName[effect] }</div>
		})

		return (
			<div id="text-panel" className={ className }>
				<div className="effectBox">
					{ inEffect }
				</div>
			</div>
		)	
	}
})

export default EffectPanel