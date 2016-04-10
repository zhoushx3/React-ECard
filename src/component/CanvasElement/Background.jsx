import Wrapper from '../Wrapper.jsx'

const Background = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId
		let selectElementId = this.props.selectElementId

		return (
			<Wrapper element={ element } elementId={ elementId } selectElementId={ selectElementId }>
			</Wrapper>
		)
	}
})

export default Background
