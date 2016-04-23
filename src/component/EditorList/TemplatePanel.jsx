import EditorPanel from './EditorPanel.jsx'
import EditorAction from '../../action/EditorAction.js'

import '../../static/stylus/controllerPanel.stylus'

const TemplatePanel = React.createClass({

	render() {
		return (
			<div id="templateStore">
				{ this.templateChoices() }
			</div>
		)
	},

	templateChoices() {
		let self = this
		let choices = ['flip_3D', 'form', 'video']
		return choices.map( function(type, index) {
			return (
				<div key={ index } onDoubleClick={ self.chooseTemplate.bind(self, type) }>
					<img src={ `src/static/images/template_${type}.png` } alt={ type } />
					<p>{ type }</p>
				</div>
			)
		})
	},

	chooseTemplate(type) {
		EditorAction.addElement(type)
	}
})

export default TemplatePanel;
