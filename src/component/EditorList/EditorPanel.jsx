import AllPanel from './AllPanel.jsx'
import FormPanel from './FormPanel.jsx'
import OtherPanel from './OtherPanel.jsx'
import EffectPanel from './EffectPanel.jsx'
import Flip3DPanel from './Flip3DPanel.jsx'
import PageEffectPanel from './PageEffectPanel.jsx'

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
		let page = this.props.page
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
					tabItem = {
						"0": <AllPanel element={ element } selectElementId={ selectElementId } />,
						"1": <EffectPanel element={ element } selectElementId={ selectElementId } />,
						"2": <OtherPanel element={ element } selectElementId={ selectElementId } />,
					}
					tabs = ['基本', '入场', '特效']
					break
				case 'pic':
				case 'video':
				case 'audio':
					tabItem = {
						"0": <AllPanel element={ element } selectElementId={ selectElementId } />,
						"1": <EffectPanel element={ element } selectElementId={ selectElementId } />,
					}
					tabs = ['基本', '入场']
					break
				case 'flip3D':
					tabItem = {
						"0": <Flip3DPanel element={ element } selectElementId={ selectElementId } />,
						"1": <AllPanel element={ element } selectElementId={ selectElementId } />,
						"2": <EffectPanel element={ element } selectElementId={ selectElementId } />,
					}
					tabs = ['模板选项', '基本', '入场']
					break
				case 'form':
					tabItem = {
						"0": <FormPanel element={ element } selectElementId={ selectElementId } />,
						"1": <AllPanel element={ element } selectElementId={ selectElementId } />,
						"2": <EffectPanel element={ element } selectElementId={ selectElementId } />,
					}
					tabs = ['表单选项', '基本', '入场']
					tabs = ['基本', '入场']
					break
			}
		} else {
			tabItem = {
				"0": <PageEffectPanel page={ page } />,
			}
			tabs = ['页面入场动画']
		}
		tabs = tabs.map( (item, i)=>{
			let className = i == this.state.tab ? 'active' : ''
			return <div className={ className } onClick={ this.changeTab.bind(null, i) } key={ i }>{ item }</div>
		})

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