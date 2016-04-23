import CanvasPanel2 from './CanvasElement/CanvasPanel2.jsx'
import EditorAction from '../action/EditorAction.js'
import Event from '../Event.js'
import Store from '../store/EditorStore.js'

import '../static/stylus/app.stylus'
// import '../static/stylus/animate.css'

const JSON_DATA = 'json_data'
const CANVAS = 'canvasPanel'

const App = React.createClass({
	getInitialState() {
		return {
			json: Store.json,
			pageIndex: 0, //当前访问的页面下标
			selectElementId: undefined,
			selectElement: undefined
		}
	},

	componentDidMount() {
		Event.addChangeListener(JSON_DATA, this._getJson)
		Store.getJson()
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
		let pageNum = json.page.length
		let pageIndex = this.state.pageIndex
		let page = json.page[pageIndex]
		let pageEffect = page.pageEffect + ' animated'
		let selectElementId = this.state.selectElementId
		let element = this.state.selectElement

		return (
			<div className={ pageEffect }>
				<CanvasPanel2 page={ page } pageIndex={ pageIndex } pageNum={ pageNum } selectElementId={ selectElementId } />
			</div>
		)
	}
})

export default App;