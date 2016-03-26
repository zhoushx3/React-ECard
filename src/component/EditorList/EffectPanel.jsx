import '../../lib/animate.css'
import animateName from '../../lib/animateName.js'
import ElementAction from '../../action/ElementAction.js'
import Percentage from './Percentage.jsx'

// 过场动画
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
									onClick={ ElementAction.changeEffect.bind(ElementAction, effect, 'in') }
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