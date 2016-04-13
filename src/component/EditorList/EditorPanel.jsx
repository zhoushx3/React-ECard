import AllPanel from './AllPanel.jsx'
import OtherPanel from './OtherPanel.jsx'
import EffectPanel from './EffectPanel.jsx'
import Flip3DPanel from './Flip3DPanel.jsx'

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
		let tabs = []
		let tabItem = {}

		if ( selectElementId !== undefined ) {
			switch (element.type) {
				case 'background':
					tabItem = {
						"0": <AllPanel element={ element } selectElementId={ selectElementId } />,
					}
					tabs = ['基本']
					break
				case 'text':
				case 'pic':
					tabItem = {
						"0": <AllPanel element={ element } selectElementId={ selectElementId } />,
						"1": <EffectPanel element={ element } selectElementId={ selectElementId } />,
						"2": <OtherPanel element={ element } selectElementId={ selectElementId } />,
					}
					tabs = ['基本', '入场', '特效']
					break
				case 'flip3D':
					tabItem = {
						"0": <Flip3DPanel element={ element } selectElementId={ selectElementId } />,
						"1": <EffectPanel element={ element } selectElementId={ selectElementId } />,
					}
					tabs = ['基本', '入场']
					break
			}

			tabs = tabs.map( (item, i)=>{
				let className = i == this.state.tab ? 'active' : ''
				return <div className={ className } onClick={ this.changeTab.bind(null, i) } key={ i }>{ item }</div>
			})
		}

		return (
			<div id="editorPanel">
				<div id="tab">
					{ tabs }
				</div>
				{ tabItem[this.state.tab] }
			</div>
		)
	}
})

export default EditorPanel;