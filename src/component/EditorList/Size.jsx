import ElementAction from '../../action/ElementAction.js'

const Size = React.createClass({

	render() {
		let width = parseInt(this.props.width)
		let height = parseInt(this.props.height)

		return (
			<div id="size" className="panel-sub">
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