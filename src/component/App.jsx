import Header from './Header.jsx'
import PagePanel from './PagePanel.jsx'
import CanvasPanel from './CanvasElement/CanvasPanel.jsx'
import EditorPanel from './EditorList/EditorPanel.jsx'

import EditorAction from '../action/EditorAction.js'
import Event from '../Event.js'
import dragEvent from '../util/dragEvent.js'
import flexEvent from '../util/flexEvent.js'

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
			selectElementId: undefined
		}
	},

	componentWillMount() {
		Event.addChangeListener(JSON_DATA, this._getJson)
		EditorAction.getJson()
	},

	componentDidMount() {
		window.dragEvent = new dragEvent(CANVAS)
		window.flexEvent = new flexEvent(CANVAS)
	},

	componentWillUnmount() {
		Event.removeChangeListener(JSON_DATA, this._getJson)
	},

	// 拿到Json数据
 	_getJson(json, pageIndex, selectElementId) {
 		this.setState({
 			json: json,
 			pageIndex: pageIndex,
 			selectElementId: selectElementId
 		})
 	},

	render() {
		let json = this.state.json
		let page = json.page[this.state.pageIndex]
		let selectElementId = this.state.selectElementId
		let element = selectElementId ? page.content[selectElementId] : undefined

		return (
			<div>
				<Header />
				<div id="container">
					<PagePanel json={ json }></PagePanel>
					<CanvasPanel page={ page } selectElementId={ selectElementId }></CanvasPanel>
					<EditorPanel element={ element } selectElementId={ selectElementId }></EditorPanel>
				</div>
			</div>
		)
	}
})

export default App;