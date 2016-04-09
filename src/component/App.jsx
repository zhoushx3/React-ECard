import Header from './Header.jsx'
import PagePanel from './PagePanel.jsx'
import CanvasPanel from './CanvasElement/CanvasPanel.jsx'
import ControllerPanel from './EditorList/ControllerPanel.jsx'

import EditorAction from '../action/EditorAction.js'
import Event from '../Event.js'
import dragEvent from '../util/dragEvent.js'
import flexEvent from '../util/flexEvent.js'
import Store from '../store/EditorStore.js'

import '../static/stylus/app.stylus'
// import '../static/stylus/animate.css'

const JSON_DATA = 'json_data'
const CANVAS = 'canvasPanel'

const App = React.createClass({
	getInitialState() {
		return {
			json: Store.json,
			pageIndex: 0,
			selectElementId: undefined,
			selectElement: undefined
		}
	},

	componentDidMount() {
		Event.addChangeListener(JSON_DATA, this._getJson)
		Store.getJson()
		window.dragEvent = new dragEvent(CANVAS)
		window.flexEvent = new flexEvent(CANVAS)
	},

	componentWillUnmount() {
		Event.removeChangeListener(JSON_DATA, this._getJson)
	},

	// 拿到Json数据
 	_getJson(json, pageIndex, selectElementId, selectElement) {
 		this.setState({
 			json: json,
 			pageIndex: pageIndex,
 			selectElementId: selectElementId,
 			selectElement: selectElement
 		})
 	},

	render() {
		let json = this.state.json
		let page = json.page[this.state.pageIndex]
		let selectElementId = this.state.selectElementId
		let element = this.state.selectElement
		console.log(selectElementId)
		return (
			<div>
				<Header />
				<div id="container">
					<CanvasPanel page={ page } selectElementId={ selectElementId } />
					<ControllerPanel element={ element } selectElementId={ selectElementId } />
				</div>
			</div>
		)
	}
})

export default App;
					// <PagePanel json={ json } />