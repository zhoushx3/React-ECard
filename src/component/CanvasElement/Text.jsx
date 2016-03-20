import React from 'React'
import Wrapper from '../Wrapper.jsx'

const Text = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId

		return (
			<Wrapper style={ element.style } elementId={ elementId }>
				<p>{ element.content }</p>
			</Wrapper>
		)
	}
})

export default Text