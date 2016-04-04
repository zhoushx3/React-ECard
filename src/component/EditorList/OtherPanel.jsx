import animateName from '../../lib/animateName.js'

import ElementAction from '../../action/ElementAction.js'


const OtherPanel = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	// 添加文字特效
	changeLetterEffect() {
		ElementAction.changeLetteringEffect(this.refs.effect.value, parseInt(this.refs.delay.value), parseInt(this.refs.initDelay.value))
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId
		let animateKey = Object.keys(animateName)
		let effect = element.lettering ? element.lettering.effect : null
		let delay = element.lettering ? element.lettering.delay	: 0
		let initDelay = element.lettering ? element.lettering.initDelay : 0
		let options = animateKey.map((option, i)=>{
			return <option value={ option } key={ i } >{ animateName[option] }</option>
		})

		return (
			<div id="other-panel" className={ this.props.className }>
				<div className="panel-sub">
					<div className="flex-box">
						<label>文字特效</label>
						<select ref="effect" onChange={ this.changeLetterEffect } value={ effect }>
							{ options }
						</select>
					</div>
				</div>
				<div className="panel-sub">
					<div className="flex-box">
						<label>字符间延时</label>
						<input type="number" ref="delay" value={ delay } onChange={ this.changeLetterEffect } />
					</div>
				</div>
				<div className="panel-sub">
					<div className="flex-box">
						<label>启动延时</label>
						<input type="number" ref="initDelay" value={ initDelay } onChange={ this.changeLetterEffect } />
					</div>
				</div>
			</div>
		)	
	}
})

export default OtherPanel