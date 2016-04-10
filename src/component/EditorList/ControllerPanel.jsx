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
		let self = this
		let element = self.props.element
		let selectElementId = self.props.selectElementId
		if ( selectElementId == undefined )
			return <TemplatePanel />
		else
			return <EditorPanel element={ element } selectElementId={ selectElementId } />
	},

	panelBtns() {
		let self = this
		let panelTypes = ['text', 'template']
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
