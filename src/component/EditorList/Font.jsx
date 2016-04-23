import Store from '../../store/EditorStore.js'
import ElementAction from '../../action/ElementAction.js'
import ColorPicker from './ColorPicker.jsx'

const Font = React.createClass({
	
	render() {
		let element = this.props.element
		let validTypes = ['text', 'flip3D']

		if ( validTypes.indexOf(element.type) === -1 )
			return null

		let lineHeight = parseInt(element.style.lineHeight)
		let fontSize = parseInt(element.style.fontSize)
		let letterSpacing = parseInt(element.style.letterSpacing)
		let color = element.style.color
		let content = element.content

		return (
			<div>
				<div className="flex-box text-content">
					<label>内容</label>
					<textarea placeholder="最多100字" maxLength={100} value={ content } onChange={ ElementAction.setStyle.bind(ElementAction, 'content')} />
				</div>
				<div className="flex-box text-font">
					<label>字号</label>
					<input type="number" value={ fontSize } onChange={ ElementAction.setStyle.bind(ElementAction, 'fontSize')} />
					<label>行距</label>
					<input type="number" value={ lineHeight } onChange={ ElementAction.setStyle.bind(ElementAction, 'lineHeight')} />
				</div>
				<div className="flex-box letterSpacing">
					<label>字符间距</label>
					<input type="number" value={ letterSpacing } onChange={ ElementAction.setStyle.bind(ElementAction, 'letterSpacing')} />
				</div>
			</div>
		)
	}
})

export default Font