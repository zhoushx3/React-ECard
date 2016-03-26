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

	render() {
		let element = this.props.element
		let selectElementId = this.props.selectElementId

		return (
			<div id="text-panel" className={ this.props.className }>
				<Font element={ element } setContent={ this.setContent } />
				<TextAlign textAlign={ element.style.textAlign } />
				<Size width={ element.style.width } height={ element.style.height } />
				<Position left={ element.style.left } top={ element.style.top } />
				<Percentage type="opacity" value={ element.style.opacity } />
				<Percentage type="rotate" value={ element.style.transform } />
			</div>
		)	
	}
})

export default TextPanel