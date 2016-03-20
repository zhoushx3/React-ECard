import React from 'React'
// import Font from './Font.jsx'
import Position from './Position.jsx'

import ElementAction from '../../action/ElementAction.js'


const TextPanel = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	setStyle(property, value) {
		ElementAction.setStyle(this.props.elementId, property, value)
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId

		return (
			<div className="panel-sub" id="text-panel">
				<Position left={ element.style.left } top={ element.style.top } setStyle={ this.setStyle }/>
			</div>
		)	
	}
})

export default TextPanel
				// <Font element={ element }/>
				// <Scale element={ element }/>