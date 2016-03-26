import ElementAction from '../../action/ElementAction.js'

const Position = React.createClass({

	render() {
		let left = parseInt(this.props.left)
		let top = parseInt(this.props.top)

		return (
			<div id="position" className="panel-sub">
				<div className="flex-box">
					<label>横坐标</label>
					<input type="number" value={left} onChange={ ElementAction.setStyle.bind(ElementAction, 'left')} />
				</div>
				<div className="flex-box">
					<label>纵坐标</label>
					<input type="number" value={top}  onChange={ ElementAction.setStyle.bind(ElementAction, 'top')} />
				</div>
			</div>
		)	
	}
})

export default Position