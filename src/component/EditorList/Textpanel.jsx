import React from 'React'
import Font from './Font.jsx'
import Size from './Size.jsx'
import Position from './Position.jsx'
import TextAlign from './TextAlign.jsx'
import Percentage from './Percentage.jsx'

import ElementAction from '../../action/ElementAction.js'


const TextPanel = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	setStyle(property, value) {
		let element = this.props.element
		element.style[property] = value
		ElementAction.setElement(this.props.elementId, element)
	},

	setContent(event) {
		let element = this.props.element
		element.content = event.target.value
		ElementAction.setElement(this.props.elementId, element)
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId

		return (
			<div id="text-panel">
				<Font element={ element } setContent={ this.setContent } setStyle={ this.setStyle } />
				<TextAlign textAlign={ element.style.textAlign } setStyle={ this.setStyle } />
				<Size width={ element.style.width } height={ element.style.height } setStyle={ this.setStyle } />
				<Position left={ element.style.left } top={ element.style.top } setStyle={ this.setStyle } />
				<Percentage type="opacity" value={ element.style.opacity } setStyle={ this.setStyle } />
				<Percentage type="rotate" value={ element.style.transform } setStyle={ this.setStyle } />
			</div>
		)	
	}
})

export default TextPanel