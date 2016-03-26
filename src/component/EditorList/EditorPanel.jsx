import TextPanel from './TextPanel.jsx'
import OtherPanel from './OtherPanel.jsx'
import EffectPanel from './EffectPanel.jsx'

import '../../static/stylus/editorPanel.stylus'

const EditorPanel = React.createClass({

	getInitialState() {
		return {
			tab: 0
		}
	},

	componentWillMount() {

	},

	componentDidMount() {

	},

	changeTab(n) {
		this.setState({
			tab: n
		})
	},

	render() {
		let element = this.props.element
		let selectElementId = this.props.selectElementId
		let tool = null
		let other = null
		let effect = null

		let tabs = ['基本', '过场', '特效'].map( (item, i)=>{
			let className = i == this.state.tab ? 'active' : ''

			return <div className={ className } onClick={ this.changeTab.bind(null, i) } key={ i }>{ item }</div>
		})

		if (element) {
			switch (element.type) {
				case 'text':
					tool = <TextPanel className={ this.state.tab == 0 ? 'tab-item active' : 'tab-item' } element={ element } selectElementId={ selectElementId } />
					effect = <EffectPanel className={ this.state.tab == 1 ? 'tab-item active' : 'tab-item' } element={ element } selectElementId={ selectElementId } />
					other = <OtherPanel className={ this.state.tab == 2 ? 'tab-item active' : 'tab-item' } element={ element } selectElementId={ selectElementId } />
				break
			}
		}

		return (
			<div id="editorPanel">
				<div id="tab">
					{ tabs }
				</div>
				<div id="tab-items">
					{ tool }
					{ effect }
					{ other }
				</div>
			</div>
		)
	}
})

export default EditorPanel;