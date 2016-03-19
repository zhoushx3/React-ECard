import React from 'React'

import Header from './Header.jsx'
import PagePanel from './PagePanel.jsx'
import CanvasPanel from './CanvasPanel.jsx'
import EditorPanel from './EditorPanel.jsx'

import AppAction from '../action/AppAction.js'
import Event from '../Event.js'
import { GET_JSON } from '../constant/AppConstant'

import '../../static/stylus/app.stylus'

const App = React.createClass({
	getInitialState() {
		return {
			json: {
				page: []
			}
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
 		this.setState({
 			json: json
 		})
 	},

	render() {
		let json = this.state.json

		return (
			<div>
				<Header />
				<div id="container">
					<PagePanel json={ json }></PagePanel>
					<CanvasPanel json={ json }></CanvasPanel>
					<EditorPanel json={ json }></EditorPanel>
				</div>
			</div>
		)
	}
})

export default App;