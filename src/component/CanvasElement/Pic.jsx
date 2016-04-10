import Wrapper from '../Wrapper.jsx'

const Pic = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	render() {
		let element = this.props.element
		let selectElementId = this.props.selectElementId

		return (
			<Wrapper element={ element } selectElementId={ selectElementId }>
				<img src={ element.src } />
			</Wrapper>
		)
	}
})

export default Pic