import Wrapper from '../Wrapper.jsx'

const MyVideo = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId
		let selectElementId = this.props.selectElementId

		return (
			<Wrapper element={ element } elementId={ elementId } selectElementId={ selectElementId }>
				<video  controls="controls" preload="auto" width={ element.style.width } height={ element.style.height } src={ element.src }></video>
			</Wrapper>
		)
	}
})

export default MyVideo