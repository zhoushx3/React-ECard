import ElementAction from '../../action/ElementAction.js'

const Size = React.createClass({

	render() {
		let element = this.props.element
		let width = parseInt(element.style.width || 0)
		let height = parseInt(element.style.height || 0)

		return (
			<div className="panel-sub size">
				<div className="flex-box">
					<label>宽度</label>
					<input type="number" value={width} onChange={ ElementAction.setStyle.bind(ElementAction, 'width') } />
				</div>
				<div className="flex-box">
					<label>高度</label>
					<input type="number" value={height}  onChange={ ElementAction.setStyle.bind(ElementAction, 'height') } />
				</div>
			</div>
		)	
	}
})

export default Size