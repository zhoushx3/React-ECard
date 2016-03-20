import React from 'React'
// import Effect from './Effect.jsx'
// import Font from './Font.jsx'
import TextPanel from './TextPanel.jsx'

import '../../static/stylus/editorPanel.stylus'

const EditorPanel = React.createClass({

	getIntialState() {

	},

	componentWillMount() {

	},

	componentDidMount() {

	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId
		let tool = <div className="no-select">Hello</div>

		if (element) {
			switch (element.type) {
				case 'text':
					tool = <TextPanel element={ element } elementId={ elementId } />
				break
			}
		}

		return (
			<div id="editorPanel">
				{ tool }
			</div>
		)
	}
})

export default EditorPanel;