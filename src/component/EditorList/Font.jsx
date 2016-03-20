import React from 'React'

const Font = React.createClass({

	setStyle(property, event) {
		this.props.setStyle(property, (event.target.value || 0)+'px')
	},
	
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
						<textarea placeholder="最多100字" maxLength={100} value={ content} onChange={ this.props.setContent } />
					</div>
				</div>
				<div id="text-font" className="panel-sub">
					<div className="flex-box">
						<label>字号</label>
						<input type="number" value={ fontSize } onChange={this.setStyle.bind(null, 'fontSize')} />
					</div>
					<div className="flex-box">
						<label>行距</label>
						<input type="number" value={ lineHeight } onChange={this.setStyle.bind(null, 'lineHeight')} />
					</div>
				</div>
			</div>
		)
	}
})

export default Font