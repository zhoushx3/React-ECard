import React from 'React'
import Text from './Text.jsx'

import '../../static/stylus/CanvasPanel.stylus'

const CanvasPanel = React.createClass({
	propTypes: {
		page: React.PropTypes.object.isRequired
	},

	getIntialState() {

	},

	componentWillMount() {

	},

	componentDidMount() {

	},

	render() {
		let contents =this.props.page.content
		let selectElementId = this.props.elementId
		let elements = contents.map( (element, i)=>{
			switch(element.type) {
				case 'text':
					return <Text key={i} element={ element } elementId={i} selectElementId={selectElementId} />
					break
				default :
					return null
			}
		})

		return (
			<div id="canvasPanel">
				<div id="canvas">
					{ elements }
				</div>
			</div>
		)
	}
})

export default CanvasPanel;