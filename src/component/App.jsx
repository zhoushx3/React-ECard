import React from 'React'

import Header from './Header.jsx'
import PagePanel from './PagePanel.jsx'
import CanvasPanel from './CanvasElement/CanvasPanel.jsx'
import EditorPanel from './EditorList/EditorPanel.jsx'

import EditorAction from '../action/EditorAction.js'
import Event from '../Event.js'
import dragEvent from '../util/dragEvent.js'

import '../static/stylus/app.stylus'

const JSON_DATA = 'json_data'
const CANVAS = 'canvasPanel'

const App = React.createClass({
	getInitialState() {
		return {
			json: {
				page: []
			},
			pageIndex: 0,
			elementId: undefined
		}
	},

	componentWillMount() {
		Event.addChangeListener(JSON_DATA, this._getJson)
		EditorAction.getJson()
	},

	componentDidMount() {
		window.dragEvent = new dragEvent(CANVAS)
	},

	componentWillUnmount() {
		Event.removeChangeListener(JSON_DATA, this._getJson)
	},

	// 拿到Json数据
 	_getJson(json, pageIndex, elementId) {
 		this.setState({
 			json: json,
 			pageIndex: pageIndex,
 			elementId: elementId
 		})
 	},

	render() {
		let json = this.state.json
		let page = json.page[this.state.pageIndex]
		let elementId = this.state.elementId
		let element = elementId ? page.content[elementId] : undefined

		return (
			<div>
				<Header />
				<div id="container">
					<PagePanel json={ json }></PagePanel>
					<CanvasPanel page={ page }></CanvasPanel>
					<EditorPanel element={ element } elementId={ elementId }></EditorPanel>
				</div>
			</div>
		)
	}
})

export default App;