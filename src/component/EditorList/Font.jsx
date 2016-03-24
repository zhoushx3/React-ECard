import ElementAction from '../../action/ElementAction.js'

const Font = React.createClass({
	
	render() {
		let element = this.props.element
		let lineHeight = parseInt(element.style.lineHeight)
		let fontSize = parseInt(element.style.fontSize)
		let content = element.content

		return (
			<div>
				<div id="text-content" className="panel-sub">
					<label>内容</label>
					<div className="flex-box">
						<textarea placeholder="最多100字" maxLength={100} value={ content } onChange={ ElementAction.setStyle.bind(ElementAction, 'content')} />
					</div>
				</div>
				<div id="text-font" className="panel-sub">
					<div className="flex-box">
						<label>字号</label>
						<input type="number" value={ fontSize } onChange={ ElementAction.setStyle.bind(ElementAction, 'fontSize')} />
					</div>
					<div className="flex-box">
						<label>行距</label>
						<input type="number" value={ lineHeight } onChange={ ElementAction.setStyle.bind(ElementAction, 'lineHeight')} />
					</div>
				</div>
			</div>
		)
	}
})

export default Font