import Wrapper from '../Wrapper.jsx'

import '../../static/stylus/flip_3D.stylus'

const Flip3D = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId
		let selectElementId = this.props.selectElementId

		return (
			<Wrapper element={ element } elementId={ elementId } selectElementId={ selectElementId }>
				<div className="flip-3d">
				  <figure>
				    <img src={element.src} alt="" />
				    <figcaption>Mouse</figcaption>
					</figure>
				</div>
			</Wrapper>
		)
	}
})

export default Flip3D
