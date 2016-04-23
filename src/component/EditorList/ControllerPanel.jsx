import EditorPanel from './EditorPanel.jsx'
import TemplatePanel from './TemplatePanel.jsx'

import EditorAction from '../../action/EditorAction.js'

import '../../static/stylus/controllerPanel.stylus'

const ControllerPanel = React.createClass({

	getInitialState() {
		return {
			panel: 'template'
		}
	},

	componentDidMount() {
    $('#controller').niceScroll({
      cursorcolor: '#d6d6d6',
      railalign: 'right',
      horizrailenabled: false,
      cursoropacitymin:0,
      autohidemode: false
    })
	},

	render() {
		return (
			<div>
				<div id="controller">
					{ this.currentPanel() }
				</div>
				<div id="group">
					{ this.panelBtns() }
				</div>
			</div>
		)
	},

	currentPanel() {
		let page = this.props.page
		let element = this.props.element
		let selectElementId = this.props.selectElementId
		return <EditorPanel page={ page } element={ element } selectElementId={ selectElementId } />
	},

	panelBtns() {
		let self = this
		let panelTypes = ['text', 'pic', 'template']
		return panelTypes.map( function(type, index) {
			return (
				<div key={ index } onClick={ self.showPanel.bind(self, type) } className={ `group-${type}` }>
					<img src={ `src/static/images/panel_${type}.png` } alt={ type } />
				</div>
			)
		})
	},

	showPanel(panel) {
		switch (panel) {
			case 'text':
				EditorAction.addElement('text')
				break
			case 'pic':
				EditorAction.addElement('pic')
				break
			default:
				EditorAction.resetElementId(undefined)
				this.setState({
					panel: panel
				})
				break
		}
	}
})

export default ControllerPanel;
				// #controller
				// 	component(v-if="selectid === undefined", :is="currentPanel")
				// 	template(v-else)
				// 		.container
				// 			.flex-box.color
				// 				color(v-for="color in colorTypes", :colortype="color", :element="element", :selectid="selectid")
