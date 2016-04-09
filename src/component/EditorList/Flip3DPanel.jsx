import Font from './Font.jsx'
import Position from './Position.jsx'
import TextAlign from './TextAlign.jsx'

import ElementAction from '../../action/ElementAction.js'

const Flip3DPanel = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId

		return (
			<div id="flip3D-panel">
			
			</div>
		)	
	}
})

export default Flip3DPanel