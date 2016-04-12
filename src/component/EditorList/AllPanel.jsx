import Font from './Font.jsx'
import Size from './Size.jsx'
import Position from './Position.jsx'
import TextAlign from './TextAlign.jsx'
import Percentage from './Percentage.jsx'
import Color from './Color.jsx'

const AllPanel = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},
	
	render() {
		let element = this.props.element
		let selectElementId = this.props.selectElementId

		return (
			<div>
				<Color element={ element } selectElementId={ selectElementId } />
			</div>
		)
	}
})

export default AllPanel



{/*				<Percentage type="opacity" value={ element.style.opacity } />
				<Font element={ element } elementId={ elementId }/>
				<TextAlign element={ element } elementId={ elementId }/>
				<Size element={ element } elementId={ elementId }/>
				<Position element={ element } elementId={ elementId }/>
				<Percentage type="rotate" value={ element.style.transform } />*/}