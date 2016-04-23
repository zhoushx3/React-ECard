import '../../lib/animate.css'
import animateName from '../../lib/animateName.js'
import EditorAction from '../../action/EditorAction.js'
import Percentage from './Percentage.jsx'

// 过场动画
const PageEffectPanel = React.createClass({

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

	addEffect(effect, event) {
		$(event.target).addClass(effect)
	},

	render() {
		let page = this.props.page
		let eleffect = page.pageEffect || ''
		let effectKey = Object.keys(animateName)
		let className = ''
		let inEffect = effectKey.map( (effect, i)=>{
			let c = eleffect == effect ? 'animated effectModule active' : 'animated effectModule'
			return <div className={ c }
									onMouseEnter={ this.addEffect.bind(null, effect) }
									onClick={ EditorAction.changePageEffect.bind(EditorAction, effect) }
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

export default PageEffectPanel