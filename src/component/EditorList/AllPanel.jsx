import Font from './Font.jsx'
import Size from './Size.jsx'
import Position from './Position.jsx'
import TextAlign from './TextAlign.jsx'
import Percentage from './Percentage.jsx'
import Color from './Color.jsx'
import PicPanel from './PicPanel.jsx'
import VideoPanel from './VideoPanel.jsx'


const AllPanel = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},
	
	render() {
		let element = this.props.element
		let selectElementId = this.props.selectElementId

		return (
			<div className="tab-item">
				<Color element={ element } selectElementId={ selectElementId } />
				<Position element={ element } selectElementId={ selectElementId } />
				<PicPanel element={ element } selectElementId={ selectElementId } />
				<VideoPanel element={ element } selectElementId={ selectElementId } />
				<Percentage type="rotate" element={ element } selectElementId={ selectElementId } />
				<Percentage type="opacity" element={ element } selectElementId={ selectElementId } />
			</div>
		)
	}
})

export default AllPanel



{/*				<Percentage type="opacity" value={ element.style.opacity } />
				<Font element={ element } elementId={ elementId }/>
				<TextAlign element={ element } elementId={ elementId }/>
				<Size element={ element } elementId={ elementId }/>
				<Position element={ element } elementId={ elementId }/>*/}