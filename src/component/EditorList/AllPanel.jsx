import Font from './Font.jsx'
import Size from './Size.jsx'
import Position from './Position.jsx'
import TextAlign from './TextAlign.jsx'
import Percentage from './Percentage.jsx'

const AllPanel = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},
	
	render() {
		let element = this.props.element
		let selectElementId = this.props.selectElementId

		return (
			<div>
				<Font element={ element } selectElementId={ selectElementId }/>
				<TextAlign element={ element } selectElementId={ selectElementId }/>
				<Size element={ element } selectElementId={ selectElementId }/>
				<Position element={ element } selectElementId={ selectElementId }/>
			</div>
		)
	}
})

export default AllPanel



{/*				<Percentage type="opacity" value={ element.style.opacity } />
				<Percentage type="rotate" value={ element.style.transform } />*/}