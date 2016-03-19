import React from 'React'

import PagePanel from './PagePanel.jsx'
import CanvasPanel from './CanvasPanel.jsx'
import EditorPanel from './EditorPanel.jsx'

import AppAction from '../action/AppAction.js'
import Event from '../Event.js'
import { GET_JSON } from '../constant/AppConstant'
import '../../static/stylus/App.stylus'

const App = React.createClass({
	getIntialState() {
		return {
			json: undefined
		}
	},

	componentWillMount() {
		Event.addChangeListener(GET_JSON, this._getJson)
		AppAction.getJson()
	},

	componentDidMount() {
		Event.removeChangeListener(GET_JSON, this._getJson)
	},
	// 拿到Json数据
 	_getJson(json) {
 		console.log(json)
 	},

	render() {
		let json = this.json

		return (
			<div id="container">
				<PagePanel json={ json }></PagePanel>
				<CanvasPanel json={ json }></CanvasPanel>
				<EditorPanel json={ json }></EditorPanel>
			</div>
		)
	}
})

export default App;